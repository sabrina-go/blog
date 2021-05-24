/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const CONTENT_TEMPLATE = path.join(__dirname, '/../templates/content.md');

function createContent(contentName) {
  try {
    fs.copyFileSync(
      CONTENT_TEMPLATE,
      path.join(__dirname, `/../content/articles/${contentName}.md`),
      fs.constants.COPYFILE_EXCL
    );
    console.log('Fichier créé');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function checkoutMain() {
  const { sterr } = await exec('git checkout main');
  if (sterr) {
    console.error(
      `Une erreur s'est produite lors du changement de branche : ${sterr}`
    );
    process.exit(1);
  }
}

async function createBranch(branchName) {
  const { sterr } = await exec(`git checkout -b ${branchName}`);
  if (sterr) {
    console.error(
      `Une erreur s'est produite lors de la création de la branche : ${sterr}`
    );
    process.exit(1);
  }
}

async function beginGitWorkflow(contentName) {
  await checkoutMain();
  await createBranch(`add-post-${contentName}`);
}

function runServer() {
  console.log(
    "Le serveur sera disponible à l'adresse suivant : http://localhost:3000"
  );
  exec('npm run dev');
}

async function main() {
  if (process.argv.length < 3) {
    console.error('Pas de nom de post fourni');
    process.exit(1);
  }

  const contentName = process.argv[2];

  await beginGitWorkflow(contentName);
  await createContent(contentName);
  await runServer();
}

main();
