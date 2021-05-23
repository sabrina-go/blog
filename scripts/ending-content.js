/* eslint-disable no-console */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function addContent() {
  const { sterr } = await exec('git add content/');
  if (sterr) {
    console.error(
      `Une erreur s'est produite lors de l'ajout du contenu : ${sterr}`
    );
    process.exit(1);
  }
}

async function addImages() {
  const { sterr } = await exec('git add static/');
  if (sterr) {
    console.error(
      `Une erreur s'est produite lors de l'ajout des images : ${sterr}`
    );
    process.exit(1);
  }
}

async function createCommit() {
  const { sterr } = await exec('git commit -m "add new post"');
  if (sterr) {
    console.error(`Une erreur s'est produite lors du commit : ${sterr}`);
    process.exit(1);
  }
}

async function getBranchName() {
  const { stdout, sterr } = await exec('git branch --show-current');
  if (sterr) {
    console.error(
      `Une erreur s'est produite lors de la récupération de la branche : ${sterr}`
    );
    process.exit(1);
  }
  return stdout;
}

async function pushBranch() {
  const branchName = await getBranchName();
  const { sterr } = await exec(`git push --set-upstream ${branchName}`);
  if (sterr) {
    console.error(
      `Une erreur s'est produite lors du push de la branche : ${sterr}`
    );
    process.exit(1);
  }
}

async function main() {
  await addContent();
  await addImages();
  await createCommit();
  await pushBranch();
}

main();
