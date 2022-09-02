function writeToConsole(content) {
  console.log(content);
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

// do a given task for given number of times with given wait time (or default 0 ms) between each task
async function tasksRunnerWithSleep(task: Function, itteration = 1, delay = 0) {

  for (let i = 0; i < itteration; i++) {
    task(i + 1);
    await sleep(delay);
  }
  console.log("done!")
}

tasksRunnerWithSleep(writeToConsole, 8 , 500);


