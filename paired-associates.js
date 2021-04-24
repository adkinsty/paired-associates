/************************** 
 * Paired-Associates Test *
 **************************/

import { PsychoJS } from './lib/core-2021.1.2.js';
import * as core from './lib/core-2021.1.2.js';
import { TrialHandler } from './lib/data-2021.1.2.js';
import { Scheduler } from './lib/util-2021.1.2.js';
import * as visual from './lib/visual-2021.1.2.js';
import * as sound from './lib/sound-2021.1.2.js';
import * as util from './lib/util-2021.1.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'paired-associates';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instr1RoutineBegin());
flowScheduler.add(Instr1RoutineEachFrame());
flowScheduler.add(Instr1RoutineEnd());
flowScheduler.add(Instr2RoutineBegin());
flowScheduler.add(Instr2RoutineEachFrame());
flowScheduler.add(Instr2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(rngRoutineBegin());
flowScheduler.add(rngRoutineEachFrame());
flowScheduler.add(rngRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'block_files.xlsx', 'path': 'block_files.xlsx'},
    {'name': 'block3.xlsx', 'path': 'block3.xlsx'},
    {'name': 'block1.xlsx', 'path': 'block1.xlsx'},
    {'name': 'block2.xlsx', 'path': 'block2.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Instr1Clock;
var InstrText;
var instr1_key;
var Instr2Clock;
var instr2_text;
var instr2_key;
var trial_startClock;
var text;
var key_resp_4;
var primeClock;
var top_word;
var bot_word;
var fixation;
var probeClock;
var top_text;
var allResponses;
var inputDisplay;
var rngClock;
var rng_instr;
var rng_text;
var rng_resp;
var random_number;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instr1"
  Instr1Clock = new util.Clock();
  InstrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstrText',
    text: 'For this task you have to remember a series of word pairs. \n\nDuring each block a series of word pairs will appear in the middle of the screen. \n\nEach word pair will be presented for 2 seconds before moving onto the next pair. \n\n\n[Press “SPACE” to continue]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // default values
  var word1 = "";
  var word2 = "";
  // Initialize components for Routine "Instr2"
  Instr2Clock = new util.Clock();
  instr2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr2_text',
    text: 'After viewing 10 word pairs you must recall the BOTTOM word for each pair. \n\nThe pairs will not be presented in the same order in which you saw them originally.\n\nWhen it is time to recall the words, you will see the top word but no bottom word. You will have 5 seconds to type the bottom word and press the ‘RETURN/ENTER’ to submit your response.\n\n[Press “SPACE” when you are ready to begin]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_start"
  trial_startClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Ready?\n\nPress ‘SPACE’ to start the block',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prime"
  primeClock = new util.Clock();
  top_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'top_word',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bot_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'bot_word',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.015, 0.015],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "probe"
  probeClock = new util.Clock();
  top_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'top_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Store accuracies
  allResponses = []
  inputDisplay = new visual.TextStim({
    win: psychoJS.window,
    name: 'inputDisplay',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "rng"
  rngClock = new util.Clock();
  rng_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'rng_instr',
    text: 'This is your 4-digit completion code. Please write this down for later use. When you are finished, press SPACE to end the experiment. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  rng_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rng_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rng_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  random_number = Math.floor(Math.random() * 9999) + 1000;
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _instr1_key_allKeys;
var Instr1Components;
function Instr1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instr1'-------
    t = 0;
    Instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr1_key.keys = undefined;
    instr1_key.rt = undefined;
    _instr1_key_allKeys = [];
    // keep track of which components have finished
    Instr1Components = [];
    Instr1Components.push(InstrText);
    Instr1Components.push(instr1_key);
    
    for (const thisComponent of Instr1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instr1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instr1'-------
    // get current time
    t = Instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstrText* updates
    if (t >= 0.0 && InstrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstrText.tStart = t;  // (not accounting for frame time here)
      InstrText.frameNStart = frameN;  // exact frame index
      
      InstrText.setAutoDraw(true);
    }

    
    // *instr1_key* updates
    if (t >= 0.0 && instr1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1_key.tStart = t;  // (not accounting for frame time here)
      instr1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr1_key.clearEvents(); });
    }

    if (instr1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr1_key.getKeys({keyList: ['space'], waitRelease: false});
      _instr1_key_allKeys = _instr1_key_allKeys.concat(theseKeys);
      if (_instr1_key_allKeys.length > 0) {
        instr1_key.keys = _instr1_key_allKeys[_instr1_key_allKeys.length - 1].name;  // just the last key pressed
        instr1_key.rt = _instr1_key_allKeys[_instr1_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instr1'-------
    for (const thisComponent of Instr1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr1_key.keys', instr1_key.keys);
    if (typeof instr1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr1_key.rt', instr1_key.rt);
        routineTimer.reset();
        }
    
    instr1_key.stop();
    // the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instr2_key_allKeys;
var Instr2Components;
function Instr2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instr2'-------
    t = 0;
    Instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr2_key.keys = undefined;
    instr2_key.rt = undefined;
    _instr2_key_allKeys = [];
    // keep track of which components have finished
    Instr2Components = [];
    Instr2Components.push(instr2_text);
    Instr2Components.push(instr2_key);
    
    for (const thisComponent of Instr2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instr2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instr2'-------
    // get current time
    t = Instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr2_text* updates
    if (t >= 0.0 && instr2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr2_text.tStart = t;  // (not accounting for frame time here)
      instr2_text.frameNStart = frameN;  // exact frame index
      
      instr2_text.setAutoDraw(true);
    }

    
    // *instr2_key* updates
    if (t >= 0.0 && instr2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr2_key.tStart = t;  // (not accounting for frame time here)
      instr2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr2_key.clearEvents(); });
    }

    if (instr2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr2_key.getKeys({keyList: ['space'], waitRelease: false});
      _instr2_key_allKeys = _instr2_key_allKeys.concat(theseKeys);
      if (_instr2_key_allKeys.length > 0) {
        instr2_key.keys = _instr2_key_allKeys[_instr2_key_allKeys.length - 1].name;  // just the last key pressed
        instr2_key.rt = _instr2_key_allKeys[_instr2_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instr2'-------
    for (const thisComponent of Instr2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr2_key.keys', instr2_key.keys);
    if (typeof instr2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr2_key.rt', instr2_key.rt);
        routineTimer.reset();
        }
    
    instr2_key.stop();
    // the Routine "Instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'block_files.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trial_startRoutineBegin(snapshot));
    trialsLoopScheduler.add(trial_startRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trial_startRoutineEnd(snapshot));
    const prime_loopLoopScheduler = new Scheduler(psychoJS);
    trialsLoopScheduler.add(prime_loopLoopBegin, prime_loopLoopScheduler);
    trialsLoopScheduler.add(prime_loopLoopScheduler);
    trialsLoopScheduler.add(prime_loopLoopEnd);
    const probe_loopLoopScheduler = new Scheduler(psychoJS);
    trialsLoopScheduler.add(probe_loopLoopBegin, probe_loopLoopScheduler);
    trialsLoopScheduler.add(probe_loopLoopScheduler);
    trialsLoopScheduler.add(probe_loopLoopEnd);
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var prime_loop;
function prime_loopLoopBegin(prime_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  prime_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: file_name,
    seed: undefined, name: 'prime_loop'
  });
  psychoJS.experiment.addLoop(prime_loop); // add the loop to the experiment
  currentLoop = prime_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPrime_loop of prime_loop) {
    const snapshot = prime_loop.getSnapshot();
    prime_loopLoopScheduler.add(importConditions(snapshot));
    prime_loopLoopScheduler.add(primeRoutineBegin(snapshot));
    prime_loopLoopScheduler.add(primeRoutineEachFrame(snapshot));
    prime_loopLoopScheduler.add(primeRoutineEnd(snapshot));
    prime_loopLoopScheduler.add(endLoopIteration(prime_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function prime_loopLoopEnd() {
  psychoJS.experiment.removeLoop(prime_loop);

  return Scheduler.Event.NEXT;
}


var probe_loop;
function probe_loopLoopBegin(probe_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  probe_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: file_name,
    seed: undefined, name: 'probe_loop'
  });
  psychoJS.experiment.addLoop(probe_loop); // add the loop to the experiment
  currentLoop = probe_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisProbe_loop of probe_loop) {
    const snapshot = probe_loop.getSnapshot();
    probe_loopLoopScheduler.add(importConditions(snapshot));
    probe_loopLoopScheduler.add(probeRoutineBegin(snapshot));
    probe_loopLoopScheduler.add(probeRoutineEachFrame(snapshot));
    probe_loopLoopScheduler.add(probeRoutineEnd(snapshot));
    probe_loopLoopScheduler.add(endLoopIteration(probe_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function probe_loopLoopEnd() {
  psychoJS.experiment.removeLoop(probe_loop);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _key_resp_4_allKeys;
var trial_startComponents;
function trial_startRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial_start'-------
    t = 0;
    trial_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    trial_startComponents = [];
    trial_startComponents.push(text);
    trial_startComponents.push(key_resp_4);
    
    for (const thisComponent of trial_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_startRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial_start'-------
    // get current time
    t = trial_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_startRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial_start'-------
    for (const thisComponent of trial_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "trial_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var primeComponents;
function primeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'prime'-------
    t = 0;
    primeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    top_word.setText(word1);
    bot_word.setText(word2);
    // keep track of which components have finished
    primeComponents = [];
    primeComponents.push(top_word);
    primeComponents.push(bot_word);
    primeComponents.push(fixation);
    
    for (const thisComponent of primeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function primeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'prime'-------
    // get current time
    t = primeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *top_word* updates
    if (t >= 0.0 && top_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_word.tStart = t;  // (not accounting for frame time here)
      top_word.frameNStart = frameN;  // exact frame index
      
      top_word.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (top_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      top_word.setAutoDraw(false);
    }
    
    // *bot_word* updates
    if (t >= 0.0 && bot_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bot_word.tStart = t;  // (not accounting for frame time here)
      bot_word.frameNStart = frameN;  // exact frame index
      
      bot_word.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bot_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bot_word.setAutoDraw(false);
    }
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of primeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function primeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'prime'-------
    for (const thisComponent of primeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var inputText;
var probeComponents;
function probeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'probe'-------
    t = 0;
    probeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    top_text.setText(word1);
    inputText = "";
    
    // keep track of which components have finished
    probeComponents = [];
    probeComponents.push(top_text);
    probeComponents.push(inputDisplay);
    
    for (const thisComponent of probeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var keys;
var n;
var i;
function probeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'probe'-------
    // get current time
    t = probeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *top_text* updates
    if (t >= 0.0 && top_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_text.tStart = t;  // (not accounting for frame time here)
      top_text.frameNStart = frameN;  // exact frame index
      
      top_text.setAutoDraw(true);
    }

    keys = psychoJS.eventManager.getKeys()
    n = keys.length
    i = 0
    
    while (i < n) {
        
        if (keys[i].length == 1){
            inputText += keys[i]
            i += 1
        } else if (keys[i] == 'backspace') {
            inputText = inputText.slice(0,-1)
            i += 1
        } else if (keys[i] == 'space') {
            inputText += " ";
            i += 1
        } else if (keys[i] == 'return') {
            continueRoutine = false
            i += 1
        } else if (keys[i] == 'escape') {
            psychoJS.quit()
            break
        } else {
            i += 1
        }
        inputDisplay.setText(inputText);
    }
    
    // *inputDisplay* updates
    if (t >= 0 && inputDisplay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inputDisplay.tStart = t;  // (not accounting for frame time here)
      inputDisplay.frameNStart = frameN;  // exact frame index
      
      inputDisplay.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of probeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var acc;
var msg;
function probeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'probe'-------
    for (const thisComponent of probeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    acc = 0;
    
    if (inputText === word2) {
        acc = 1;
        msg = "Correct";
        psychoJS.experiment.addData("correct", acc)
    } else {
        msg = "Incorrect";
        psychoJS.experiment.addData("Incorrect", acc)
    }
    psychoJS.experiment.addData("response", inputText);
    
    allResponses.push(acc)
    inputDisplay.setText('');
    
    
    // the Routine "probe" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _rng_resp_allKeys;
var rngComponents;
function rngRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'rng'-------
    t = 0;
    rngClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    rng_text.setText(random_number);
    rng_resp.keys = undefined;
    rng_resp.rt = undefined;
    _rng_resp_allKeys = [];
    // keep track of which components have finished
    rngComponents = [];
    rngComponents.push(rng_instr);
    rngComponents.push(rng_text);
    rngComponents.push(rng_resp);
    
    for (const thisComponent of rngComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rngRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'rng'-------
    // get current time
    t = rngClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rng_instr* updates
    if (t >= 0.0 && rng_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_instr.tStart = t;  // (not accounting for frame time here)
      rng_instr.frameNStart = frameN;  // exact frame index
      
      rng_instr.setAutoDraw(true);
    }

    
    // *rng_text* updates
    if (t >= 0.0 && rng_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_text.tStart = t;  // (not accounting for frame time here)
      rng_text.frameNStart = frameN;  // exact frame index
      
      rng_text.setAutoDraw(true);
    }

    
    // *rng_resp* updates
    if (t >= 0.0 && rng_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_resp.tStart = t;  // (not accounting for frame time here)
      rng_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rng_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rng_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rng_resp.clearEvents(); });
    }

    if (rng_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = rng_resp.getKeys({keyList: ['space'], waitRelease: false});
      _rng_resp_allKeys = _rng_resp_allKeys.concat(theseKeys);
      if (_rng_resp_allKeys.length > 0) {
        rng_resp.keys = _rng_resp_allKeys[_rng_resp_allKeys.length - 1].name;  // just the last key pressed
        rng_resp.rt = _rng_resp_allKeys[_rng_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rngComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rngRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'rng'-------
    for (const thisComponent of rngComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rng_resp.keys', rng_resp.keys);
    if (typeof rng_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rng_resp.rt', rng_resp.rt);
        routineTimer.reset();
        }
    
    rng_resp.stop();
    // the Routine "rng" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
