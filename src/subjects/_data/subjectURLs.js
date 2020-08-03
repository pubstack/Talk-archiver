const awaitSubjectURLs = require('../../helpers/subjectURLs');

module.exports = async function () {
  const subjectURLs = await awaitSubjectURLs;
  const batchedURLs = [];
  for (let i = 0; i < 10; i++) {
    const start = i * 28000;
    const finish = start + 28000;
    batchedURLs.push(subjectURLs.slice(start, finish))
  }
  return batchedURLs;
}