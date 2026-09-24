import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the capacity planner and converter", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Storage Lab — OpenZFS Capacity Planner/);
  assert.match(html, /QUICK UNIT CONVERTER/);
  assert.match(html, /Value to convert/);
  assert.match(html, /ZFS-REPORTED USABLE/);
  assert.match(html, /PLANNED DATA CAPACITY/);
});

test("converter input preserves editable text instead of coercing a leading zero", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(source, /setConvertValue\]=useState\("1"\)/);
  assert.match(source, /setConvertValue\(e\.target\.value\)/);
  assert.doesNotMatch(source, /setConvertValue\(num\(/);
});
