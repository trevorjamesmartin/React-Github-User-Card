/*
  persist memory across refreshes.

  name resolution is NOT baked in!,
  a unique address will be expected by the target.

  the following two URLS may store different sets of data.
     http://localhost:3000/
     http://127.0.0.1:3000/
*/
const store = window.localStorage;
const storeKey = "flx1111";
const storeMemory = o => store.setItem(storeKey, JSON.stringify(o));
const loadMemory = () => JSON.parse(store.getItem(storeKey)) || [];

export { storeMemory, loadMemory };
