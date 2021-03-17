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
flowScheduler.add(Instr3RoutineBegin());
flowScheduler.add(Instr3RoutineEachFrame());
flowScheduler.add(Instr3RoutineEnd());
const practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_trialsLoopBegin, practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopEnd);
const practice_respLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_respLoopBegin, practice_respLoopScheduler);
flowScheduler.add(practice_respLoopScheduler);
flowScheduler.add(practice_respLoopEnd);
flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'block_files.xlsx', 'path': 'block_files.xlsx'},
    {'name': 'block2.xlsx', 'path': 'block2.xlsx'},
    {'name': 'block1.xlsx', 'path': 'block1.xlsx'},
    {'name': 'block3.xlsx', 'path': 'block3.xlsx'},
    {'name': 'practice_words.xlsx', 'path': 'practice_words.xlsx'}
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
var key_resp;
var Instr2Clock;
var example;
var key_resp_2;
var Instr3Clock;
var practice;
var key_resp_3;
var PracticeClock;
var top_practice;
var bottom_practice;
var fix_practice;
var practice_probeClock;
var top;
var practiceprobe;
var submit_practice;
var startClock;
var ready;
var key_resp_5;
var Ready_Clock;
var text;
var key_resp_4;
var prime_trialClock;
var top_word;
var bot_word;
var polygon;
var probe_trialClock;
var top_text;
var probe_text;
var submit;
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
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // default values
  var word1 = "";
  var word2 = "";
  // Initialize components for Routine "Instr2"
  Instr2Clock = new util.Clock();
  example = new visual.TextStim({
    win: psychoJS.window,
    name: 'example',
    text: 'After viewing 10 word pairs you must recall the BOTTOM word for each pair. \n\nThe pairs will not be presented in the same order in which you saw them originally.\n\nWhen it is time to recall the words, you will see the top word with “???” underneath. You will then type in the corresponding bottom word when the cursor appears. \n\nYou will have 5 seconds to type in the correct response. Press the ‘ENTER’ key once you have typed in your response.\n\n\n[Press “SPACE” to continue]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr3"
  Instr3Clock = new util.Clock();
  practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice',
    text: 'Let’s try a practice block with 3 word pairs.\n\n\n[Press “SPACE” to continue]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Practice"
  PracticeClock = new util.Clock();
  top_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'top_practice',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bottom_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'bottom_practice',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  fix_practice = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_practice', 
    vertices: 'cross', size:[0.015, 0.015],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "practice_probe"
  practice_probeClock = new util.Clock();
  top = new visual.TextStim({
    win: psychoJS.window,
    name: 'top',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  practiceprobe = new visual.TextBox({
    win: psychoJS.window,
    name: 'practiceprobe',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  submit_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start"
  startClock = new util.Clock();
  ready = new visual.TextStim({
    win: psychoJS.window,
    name: 'ready',
    text: 'Ready to start the actual task?\n\nPress [‘SPACE’ to begin]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Ready_"
  Ready_Clock = new util.Clock();
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
  
  // Initialize components for Routine "prime_trial"
  prime_trialClock = new util.Clock();
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
  
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.015, 0.015],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "probe_trial"
  probe_trialClock = new util.Clock();
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
  
  probe_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'probe_text',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: true, italic: false,
    opacity: undefined,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  submit = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var Instr1Components;
function Instr1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instr1'-------
    t = 0;
    Instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Instr1Components = [];
    Instr1Components.push(InstrText);
    Instr1Components.push(key_resp);
    
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

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
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
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var Instr2Components;
function Instr2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instr2'-------
    t = 0;
    Instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Instr2Components = [];
    Instr2Components.push(example);
    Instr2Components.push(key_resp_2);
    
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
    
    // *example* updates
    if (t >= 0.0 && example.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      example.tStart = t;  // (not accounting for frame time here)
      example.frameNStart = frameN;  // exact frame index
      
      example.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
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
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var Instr3Components;
function Instr3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instr3'-------
    t = 0;
    Instr3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Instr3Components = [];
    Instr3Components.push(practice);
    Instr3Components.push(key_resp_3);
    
    for (const thisComponent of Instr3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instr3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instr3'-------
    // get current time
    t = Instr3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice* updates
    if (t >= 0.0 && practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice.tStart = t;  // (not accounting for frame time here)
      practice.frameNStart = frameN;  // exact frame index
      
      practice.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
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
    for (const thisComponent of Instr3Components)
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


function Instr3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instr3'-------
    for (const thisComponent of Instr3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Instr3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_trials;
var currentLoop;
function practice_trialsLoopBegin(practice_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'practice_words.xlsx',
    seed: undefined, name: 'practice_trials'
  });
  psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
  currentLoop = practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_trial of practice_trials) {
    const snapshot = practice_trials.getSnapshot();
    practice_trialsLoopScheduler.add(importConditions(snapshot));
    practice_trialsLoopScheduler.add(PracticeRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(PracticeRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(PracticeRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(endLoopIteration(practice_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(practice_trials);

  return Scheduler.Event.NEXT;
}


var practice_resp;
function practice_respLoopBegin(practice_respLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_resp = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'practice_words.xlsx',
    seed: undefined, name: 'practice_resp'
  });
  psychoJS.experiment.addLoop(practice_resp); // add the loop to the experiment
  currentLoop = practice_resp;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_resp of practice_resp) {
    const snapshot = practice_resp.getSnapshot();
    practice_respLoopScheduler.add(importConditions(snapshot));
    practice_respLoopScheduler.add(practice_probeRoutineBegin(snapshot));
    practice_respLoopScheduler.add(practice_probeRoutineEachFrame(snapshot));
    practice_respLoopScheduler.add(practice_probeRoutineEnd(snapshot));
    practice_respLoopScheduler.add(endLoopIteration(practice_respLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practice_respLoopEnd() {
  psychoJS.experiment.removeLoop(practice_resp);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'block_files.xlsx',
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    blocksLoopScheduler.add(importConditions(snapshot));
    blocksLoopScheduler.add(Ready_RoutineBegin(snapshot));
    blocksLoopScheduler.add(Ready_RoutineEachFrame(snapshot));
    blocksLoopScheduler.add(Ready_RoutineEnd(snapshot));
    const prime_loopLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(prime_loopLoopBegin, prime_loopLoopScheduler);
    blocksLoopScheduler.add(prime_loopLoopScheduler);
    blocksLoopScheduler.add(prime_loopLoopEnd);
    const probe_loopLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(probe_loopLoopBegin, probe_loopLoopScheduler);
    blocksLoopScheduler.add(probe_loopLoopScheduler);
    blocksLoopScheduler.add(probe_loopLoopEnd);
    blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
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
    prime_loopLoopScheduler.add(prime_trialRoutineBegin(snapshot));
    prime_loopLoopScheduler.add(prime_trialRoutineEachFrame(snapshot));
    prime_loopLoopScheduler.add(prime_trialRoutineEnd(snapshot));
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
    probe_loopLoopScheduler.add(probe_trialRoutineBegin(snapshot));
    probe_loopLoopScheduler.add(probe_trialRoutineEachFrame(snapshot));
    probe_loopLoopScheduler.add(probe_trialRoutineEnd(snapshot));
    probe_loopLoopScheduler.add(endLoopIteration(probe_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function probe_loopLoopEnd() {
  psychoJS.experiment.removeLoop(probe_loop);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var PracticeComponents;
function PracticeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Practice'-------
    t = 0;
    PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    top_practice.setText(word1);
    bottom_practice.setText(word2);
    // keep track of which components have finished
    PracticeComponents = [];
    PracticeComponents.push(top_practice);
    PracticeComponents.push(bottom_practice);
    PracticeComponents.push(fix_practice);
    
    for (const thisComponent of PracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function PracticeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Practice'-------
    // get current time
    t = PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *top_practice* updates
    if (t >= 0.0 && top_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_practice.tStart = t;  // (not accounting for frame time here)
      top_practice.frameNStart = frameN;  // exact frame index
      
      top_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (top_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      top_practice.setAutoDraw(false);
    }
    
    // *bottom_practice* updates
    if (t >= 0.0 && bottom_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bottom_practice.tStart = t;  // (not accounting for frame time here)
      bottom_practice.frameNStart = frameN;  // exact frame index
      
      bottom_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bottom_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bottom_practice.setAutoDraw(false);
    }
    
    // *fix_practice* updates
    if (t >= 0.0 && fix_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_practice.tStart = t;  // (not accounting for frame time here)
      fix_practice.frameNStart = frameN;  // exact frame index
      
      fix_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_practice.setAutoDraw(false);
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
    for (const thisComponent of PracticeComponents)
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


function PracticeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Practice'-------
    for (const thisComponent of PracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _submit_practice_allKeys;
var practice_probeComponents;
function practice_probeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_probe'-------
    t = 0;
    practice_probeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    top.setText(word1);
    practiceprobe.setPos([0.35, (- 0.05)]);
    practiceprobe.setText(' ');
    submit_practice.keys = undefined;
    submit_practice.rt = undefined;
    _submit_practice_allKeys = [];
    // keep track of which components have finished
    practice_probeComponents = [];
    practice_probeComponents.push(top);
    practice_probeComponents.push(practiceprobe);
    practice_probeComponents.push(submit_practice);
    
    for (const thisComponent of practice_probeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_probeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_probe'-------
    // get current time
    t = practice_probeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *top* updates
    if (t >= 0.0 && top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top.tStart = t;  // (not accounting for frame time here)
      top.frameNStart = frameN;  // exact frame index
      
      top.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (top.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      top.setAutoDraw(false);
    }
    
    // *practiceprobe* updates
    if (t >= 0.0 && practiceprobe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceprobe.tStart = t;  // (not accounting for frame time here)
      practiceprobe.frameNStart = frameN;  // exact frame index
      
      practiceprobe.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practiceprobe.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practiceprobe.setAutoDraw(false);
    }
    
    // *submit_practice* updates
    if (t >= 0.0 && submit_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_practice.tStart = t;  // (not accounting for frame time here)
      submit_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { submit_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { submit_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { submit_practice.clearEvents(); });
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (submit_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      submit_practice.status = PsychoJS.Status.FINISHED;
  }

    if (submit_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = submit_practice.getKeys({keyList: ['return'], waitRelease: false});
      _submit_practice_allKeys = _submit_practice_allKeys.concat(theseKeys);
      if (_submit_practice_allKeys.length > 0) {
        submit_practice.keys = _submit_practice_allKeys[_submit_practice_allKeys.length - 1].name;  // just the last key pressed
        submit_practice.rt = _submit_practice_allKeys[_submit_practice_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_probeComponents)
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


function practice_probeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_probe'-------
    for (const thisComponent of practice_probeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practiceprobe.text', practiceprobe.text);
    psychoJS.experiment.addData('submit_practice.keys', submit_practice.keys);
    if (typeof submit_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('submit_practice.rt', submit_practice.rt);
        routineTimer.reset();
        }
    
    submit_practice.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var startComponents;
function startRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'start'-------
    t = 0;
    startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    startComponents = [];
    startComponents.push(ready);
    startComponents.push(key_resp_5);
    
    for (const thisComponent of startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function startRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'start'-------
    // get current time
    t = startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ready* updates
    if (t >= 0.0 && ready.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready.tStart = t;  // (not accounting for frame time here)
      ready.frameNStart = frameN;  // exact frame index
      
      ready.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
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
    for (const thisComponent of startComponents)
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


function startRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'start'-------
    for (const thisComponent of startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var Ready_Components;
function Ready_RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Ready_'-------
    t = 0;
    Ready_Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    Ready_Components = [];
    Ready_Components.push(text);
    Ready_Components.push(key_resp_4);
    
    for (const thisComponent of Ready_Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Ready_RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Ready_'-------
    // get current time
    t = Ready_Clock.getTime();
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
    for (const thisComponent of Ready_Components)
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


function Ready_RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Ready_'-------
    for (const thisComponent of Ready_Components) {
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
    // the Routine "Ready_" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var prime_trialComponents;
function prime_trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'prime_trial'-------
    t = 0;
    prime_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    top_word.setText(word1);
    bot_word.setText(word2);
    // keep track of which components have finished
    prime_trialComponents = [];
    prime_trialComponents.push(top_word);
    prime_trialComponents.push(bot_word);
    prime_trialComponents.push(polygon);
    
    for (const thisComponent of prime_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prime_trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'prime_trial'-------
    // get current time
    t = prime_trialClock.getTime();
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
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
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
    for (const thisComponent of prime_trialComponents)
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


function prime_trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'prime_trial'-------
    for (const thisComponent of prime_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _submit_allKeys;
var probe_trialComponents;
function probe_trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'probe_trial'-------
    t = 0;
    probe_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    top_text.setText(word1);
    probe_text.setPos([0.35, (- 0.05)]);
    probe_text.setText(' ');
    submit.keys = undefined;
    submit.rt = undefined;
    _submit_allKeys = [];
    // keep track of which components have finished
    probe_trialComponents = [];
    probe_trialComponents.push(top_text);
    probe_trialComponents.push(probe_text);
    probe_trialComponents.push(submit);
    
    for (const thisComponent of probe_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function probe_trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'probe_trial'-------
    // get current time
    t = probe_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *top_text* updates
    if (t >= 0.0 && top_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_text.tStart = t;  // (not accounting for frame time here)
      top_text.frameNStart = frameN;  // exact frame index
      
      top_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (top_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      top_text.setAutoDraw(false);
    }
    
    // *probe_text* updates
    if (t >= 0.0 && probe_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_text.tStart = t;  // (not accounting for frame time here)
      probe_text.frameNStart = frameN;  // exact frame index
      
      probe_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe_text.setAutoDraw(false);
    }
    
    // *submit* updates
    if (t >= 0.0 && submit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit.tStart = t;  // (not accounting for frame time here)
      submit.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { submit.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { submit.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { submit.clearEvents(); });
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (submit.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      submit.status = PsychoJS.Status.FINISHED;
  }

    if (submit.status === PsychoJS.Status.STARTED) {
      let theseKeys = submit.getKeys({keyList: ['return'], waitRelease: false});
      _submit_allKeys = _submit_allKeys.concat(theseKeys);
      if (_submit_allKeys.length > 0) {
        submit.keys = _submit_allKeys[_submit_allKeys.length - 1].name;  // just the last key pressed
        submit.rt = _submit_allKeys[_submit_allKeys.length - 1].rt;
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
    for (const thisComponent of probe_trialComponents)
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


function probe_trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'probe_trial'-------
    for (const thisComponent of probe_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('probe_text.text', probe_text.text);
    psychoJS.experiment.addData('submit.keys', submit.keys);
    if (typeof submit.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('submit.rt', submit.rt);
        routineTimer.reset();
        }
    
    submit.stop();
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
