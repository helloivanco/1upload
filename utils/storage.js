import { File, Web3Storage } from 'web3.storage';

function makeStorageClient() {
  return new Web3Storage({ token: process.env.NEXT_PUBLIC_API_TOKEN });
}

// makeStorageClient returns an authorized Web3.Storage client instance
const client = makeStorageClient();

export async function storeWithProgress(files, progress, uploadedFiles) {
  // show the root cid as soon as it's ready
  const onRootCidReady = (cid) => {
    console.log('uploading file with cid:', cid);
    uploadedFiles.push({ name: files[0].name, cid: cid });
  };

  // when each chunk is stored, update the percentage complete and display
  const totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0);
  let uploaded = 0;

  const onStoredChunk = (size) => {
    uploaded += size;
    const pct = totalSize / uploaded;
    console.log(`Uploading... ${pct.toFixed(2)}% complete`);
    progress(totalSize, uploaded, totalSize);
  };

  // client.put will invoke our callbacks during the upload
  // and return the root cid when the upload completes
  return client.put(files, {
    onRootCidReady,
    onStoredChunk,
    wrapWithDirectory: false,
  });
}

export async function storeJSON(json) {
  const data = JSON.stringify(json);

  const cid = await client.put([new File([Buffer.from(data)], '')], {
    wrapWithDirectory: false,
  });
  console.log(cid);
  return cid;
}
