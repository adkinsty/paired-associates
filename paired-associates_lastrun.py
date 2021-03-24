#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.2),
    on Wed Mar 17 00:14:51 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.2'
expName = 'paired-associates'  # from the Builder filename that created this script
expInfo = {'participant': ''}
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/adkinsty/files/experiments/paired-associates/paired-associates_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instr1"
Instr1Clock = core.Clock()
InstrText = visual.TextStim(win=win, name='InstrText',
    text='For this task you have to remember a series of word pairs. \n\nDuring each block a series of word pairs will appear in the middle of the screen. \n\nEach word pair will be presented for 2 seconds before moving onto the next pair. \n\n\n[Press “SPACE” to continue]',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "Instr2"
Instr2Clock = core.Clock()
example = visual.TextStim(win=win, name='example',
    text='After viewing 10 word pairs you must recall the BOTTOM word for each pair. \n\nThe pairs will not be presented in the same order in which you saw them originally.\n\nWhen it is time to recall the words, you will see the top word with “???” underneath. You will then type in the corresponding bottom word when the cursor appears. \n\nYou will have 5 seconds to type in the correct response. Press the ‘ENTER’ key once you have typed in your response.\n\n\n[Press “SPACE” to continue]',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "Instr3"
Instr3Clock = core.Clock()
practice = visual.TextStim(win=win, name='practice',
    text='Let’s try a practice block with 3 word pairs.\n\n\n[Press “SPACE” to continue]',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "practice_prime"
practice_primeClock = core.Clock()
practice_top_word = visual.TextStim(win=win, name='practice_top_word',
    text='',
    font='Open Sans',
    pos=(0, .05), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
practice_bot_word = visual.TextStim(win=win, name='practice_bot_word',
    text='',
    font='Open Sans',
    pos=(0, -.05), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
practice_fixation = visual.ShapeStim(
    win=win, name='practice_fixation', vertices='cross',
    size=(0.015, 0.015),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)

# Initialize components for Routine "practice_probe"
practice_probeClock = core.Clock()
practice_top_text = visual.TextStim(win=win, name='practice_top_text',
    text='',
    font='Open Sans',
    pos=(0, .05), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
practice_probe_text = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=[0,0],     letterHeight=0.05,
     size=None, borderWidth=0.01,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=None,
     anchor='center',
     fillColor='grey', borderColor='grey',
     flipHoriz=False, flipVert=False,
     editable=True,
     name='practice_probe_text',
     autoLog=True,
)
practice_submit = keyboard.Keyboard()

# Initialize components for Routine "block_start"
block_startClock = core.Clock()
ready = visual.TextStim(win=win, name='ready',
    text='Ready to start the actual task?\n\nPress [‘SPACE’ to begin]',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "trial_start"
trial_startClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Ready?\n\nPress ‘SPACE’ to start the block',
    font='Open Sans',
    pos=(0, 0), height=0.06, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "prime"
primeClock = core.Clock()
top_word = visual.TextStim(win=win, name='top_word',
    text='',
    font='Open Sans',
    pos=(0, .05), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
bot_word = visual.TextStim(win=win, name='bot_word',
    text='',
    font='Open Sans',
    pos=(0, -.05), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',
    size=(0.015, 0.015),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)

# Initialize components for Routine "probe"
probeClock = core.Clock()
top_text = visual.TextStim(win=win, name='top_text',
    text='',
    font='Open Sans',
    pos=(0, .05), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
probe_text = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=[0,0],     letterHeight=0.05,
     size=None, borderWidth=0.01,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=0.0,
     padding=None,
     anchor='center',
     fillColor='grey', borderColor='grey',
     flipHoriz=False, flipVert=False,
     editable=True,
     name='probe_text',
     autoLog=True,
)
submit = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instr1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
Instr1Components = [InstrText, key_resp]
for thisComponent in Instr1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instr1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instr1"-------
while continueRoutine:
    # get current time
    t = Instr1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instr1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *InstrText* updates
    if InstrText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        InstrText.frameNStart = frameN  # exact frame index
        InstrText.tStart = t  # local t and not account for scr refresh
        InstrText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(InstrText, 'tStartRefresh')  # time at next scr refresh
        InstrText.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instr1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instr1"-------
for thisComponent in Instr1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('InstrText.started', InstrText.tStartRefresh)
thisExp.addData('InstrText.stopped', InstrText.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instr2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
Instr2Components = [example, key_resp_2]
for thisComponent in Instr2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instr2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instr2"-------
while continueRoutine:
    # get current time
    t = Instr2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instr2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *example* updates
    if example.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        example.frameNStart = frameN  # exact frame index
        example.tStart = t  # local t and not account for scr refresh
        example.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(example, 'tStartRefresh')  # time at next scr refresh
        example.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instr2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instr2"-------
for thisComponent in Instr2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('example.started', example.tStartRefresh)
thisExp.addData('example.stopped', example.tStopRefresh)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.addData('key_resp_2.started', key_resp_2.tStartRefresh)
thisExp.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
thisExp.nextEntry()
# the Routine "Instr2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instr3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
Instr3Components = [practice, key_resp_3]
for thisComponent in Instr3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instr3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instr3"-------
while continueRoutine:
    # get current time
    t = Instr3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instr3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *practice* updates
    if practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        practice.frameNStart = frameN  # exact frame index
        practice.tStart = t  # local t and not account for scr refresh
        practice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(practice, 'tStartRefresh')  # time at next scr refresh
        practice.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instr3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instr3"-------
for thisComponent in Instr3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('practice.started', practice.tStartRefresh)
thisExp.addData('practice.stopped', practice.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()
# the Routine "Instr3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_prime_loop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('practice_words.xlsx'),
    seed=None, name='practice_prime_loop')
thisExp.addLoop(practice_prime_loop)  # add the loop to the experiment
thisPractice_prime_loop = practice_prime_loop.trialList[0]  # so we can initialise stimuli with some values

for thisPractice_prime_loop in practice_prime_loop:
    currentLoop = practice_prime_loop
    
    # ------Prepare to start Routine "practice_prime"-------
    continueRoutine = True
    routineTimer.add(2.000000)
    # update component parameters for each repeat
    practice_top_word.setText(word1)
    practice_bot_word.setText(word2)
    # keep track of which components have finished
    practice_primeComponents = [practice_top_word, practice_bot_word, practice_fixation]
    for thisComponent in practice_primeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_primeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_prime"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = practice_primeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_primeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *practice_top_word* updates
        if practice_top_word.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_top_word.frameNStart = frameN  # exact frame index
            practice_top_word.tStart = t  # local t and not account for scr refresh
            practice_top_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_top_word, 'tStartRefresh')  # time at next scr refresh
            practice_top_word.setAutoDraw(True)
        if practice_top_word.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > practice_top_word.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                practice_top_word.tStop = t  # not accounting for scr refresh
                practice_top_word.frameNStop = frameN  # exact frame index
                win.timeOnFlip(practice_top_word, 'tStopRefresh')  # time at next scr refresh
                practice_top_word.setAutoDraw(False)
        
        # *practice_bot_word* updates
        if practice_bot_word.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_bot_word.frameNStart = frameN  # exact frame index
            practice_bot_word.tStart = t  # local t and not account for scr refresh
            practice_bot_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_bot_word, 'tStartRefresh')  # time at next scr refresh
            practice_bot_word.setAutoDraw(True)
        if practice_bot_word.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > practice_bot_word.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                practice_bot_word.tStop = t  # not accounting for scr refresh
                practice_bot_word.frameNStop = frameN  # exact frame index
                win.timeOnFlip(practice_bot_word, 'tStopRefresh')  # time at next scr refresh
                practice_bot_word.setAutoDraw(False)
        
        # *practice_fixation* updates
        if practice_fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_fixation.frameNStart = frameN  # exact frame index
            practice_fixation.tStart = t  # local t and not account for scr refresh
            practice_fixation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_fixation, 'tStartRefresh')  # time at next scr refresh
            practice_fixation.setAutoDraw(True)
        if practice_fixation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > practice_fixation.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                practice_fixation.tStop = t  # not accounting for scr refresh
                practice_fixation.frameNStop = frameN  # exact frame index
                win.timeOnFlip(practice_fixation, 'tStopRefresh')  # time at next scr refresh
                practice_fixation.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_primeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_prime"-------
    for thisComponent in practice_primeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practice_prime_loop.addData('practice_top_word.started', practice_top_word.tStartRefresh)
    practice_prime_loop.addData('practice_top_word.stopped', practice_top_word.tStopRefresh)
    practice_prime_loop.addData('practice_bot_word.started', practice_bot_word.tStartRefresh)
    practice_prime_loop.addData('practice_bot_word.stopped', practice_bot_word.tStopRefresh)
    practice_prime_loop.addData('practice_fixation.started', practice_fixation.tStartRefresh)
    practice_prime_loop.addData('practice_fixation.stopped', practice_fixation.tStopRefresh)
# completed 1.0 repeats of 'practice_prime_loop'


# set up handler to look after randomisation of conditions etc
practice_probe_loop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('practice_words.xlsx'),
    seed=None, name='practice_probe_loop')
thisExp.addLoop(practice_probe_loop)  # add the loop to the experiment
thisPractice_probe_loop = practice_probe_loop.trialList[0]  # so we can initialise stimuli with some values

for thisPractice_probe_loop in practice_probe_loop:
    currentLoop = practice_probe_loop
    
    # ------Prepare to start Routine "practice_probe"-------
    continueRoutine = True
    routineTimer.add(5.000000)
    # update component parameters for each repeat
    practice_top_text.setText(word1)
    practice_probe_text.setPos((0, -.1))
    practice_probe_text.setText(' ')
    practice_submit.keys = []
    practice_submit.rt = []
    _practice_submit_allKeys = []
    # keep track of which components have finished
    practice_probeComponents = [practice_top_text, practice_probe_text, practice_submit]
    for thisComponent in practice_probeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_probeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_probe"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = practice_probeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_probeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *practice_top_text* updates
        if practice_top_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_top_text.frameNStart = frameN  # exact frame index
            practice_top_text.tStart = t  # local t and not account for scr refresh
            practice_top_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_top_text, 'tStartRefresh')  # time at next scr refresh
            practice_top_text.setAutoDraw(True)
        if practice_top_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > practice_top_text.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                practice_top_text.tStop = t  # not accounting for scr refresh
                practice_top_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(practice_top_text, 'tStopRefresh')  # time at next scr refresh
                practice_top_text.setAutoDraw(False)
        
        # *practice_probe_text* updates
        if practice_probe_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_probe_text.frameNStart = frameN  # exact frame index
            practice_probe_text.tStart = t  # local t and not account for scr refresh
            practice_probe_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_probe_text, 'tStartRefresh')  # time at next scr refresh
            practice_probe_text.setAutoDraw(True)
        if practice_probe_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > practice_probe_text.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                practice_probe_text.tStop = t  # not accounting for scr refresh
                practice_probe_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(practice_probe_text, 'tStopRefresh')  # time at next scr refresh
                practice_probe_text.setAutoDraw(False)
        
        # *practice_submit* updates
        waitOnFlip = False
        if practice_submit.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_submit.frameNStart = frameN  # exact frame index
            practice_submit.tStart = t  # local t and not account for scr refresh
            practice_submit.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_submit, 'tStartRefresh')  # time at next scr refresh
            practice_submit.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(practice_submit.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(practice_submit.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if practice_submit.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > practice_submit.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                practice_submit.tStop = t  # not accounting for scr refresh
                practice_submit.frameNStop = frameN  # exact frame index
                win.timeOnFlip(practice_submit, 'tStopRefresh')  # time at next scr refresh
                practice_submit.status = FINISHED
        if practice_submit.status == STARTED and not waitOnFlip:
            theseKeys = practice_submit.getKeys(keyList=['return'], waitRelease=False)
            _practice_submit_allKeys.extend(theseKeys)
            if len(_practice_submit_allKeys):
                practice_submit.keys = _practice_submit_allKeys[-1].name  # just the last key pressed
                practice_submit.rt = _practice_submit_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_probeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_probe"-------
    for thisComponent in practice_probeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practice_probe_loop.addData('practice_top_text.started', practice_top_text.tStartRefresh)
    practice_probe_loop.addData('practice_top_text.stopped', practice_top_text.tStopRefresh)
    practice_probe_loop.addData('practice_probe_text.text',practice_probe_text.text)
    practice_probe_text.reset()
    practice_probe_loop.addData('practice_probe_text.started', practice_probe_text.tStartRefresh)
    practice_probe_loop.addData('practice_probe_text.stopped', practice_probe_text.tStopRefresh)
    # check responses
    if practice_submit.keys in ['', [], None]:  # No response was made
        practice_submit.keys = None
    practice_probe_loop.addData('practice_submit.keys',practice_submit.keys)
    if practice_submit.keys != None:  # we had a response
        practice_probe_loop.addData('practice_submit.rt', practice_submit.rt)
    practice_probe_loop.addData('practice_submit.started', practice_submit.tStartRefresh)
    practice_probe_loop.addData('practice_submit.stopped', practice_submit.tStopRefresh)
# completed 1.0 repeats of 'practice_probe_loop'


# ------Prepare to start Routine "block_start"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
block_startComponents = [ready, key_resp_5]
for thisComponent in block_startComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
block_startClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "block_start"-------
while continueRoutine:
    # get current time
    t = block_startClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=block_startClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ready* updates
    if ready.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ready.frameNStart = frameN  # exact frame index
        ready.tStart = t  # local t and not account for scr refresh
        ready.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ready, 'tStartRefresh')  # time at next scr refresh
        ready.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in block_startComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "block_start"-------
for thisComponent in block_startComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('ready.started', ready.tStartRefresh)
thisExp.addData('ready.stopped', ready.tStopRefresh)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys = None
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.addData('key_resp_5.started', key_resp_5.tStartRefresh)
thisExp.addData('key_resp_5.stopped', key_resp_5.tStopRefresh)
thisExp.nextEntry()
# the Routine "block_start" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('block_files.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values

for thisTrial in trials:
    currentLoop = trials
    
    # ------Prepare to start Routine "trial_start"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    trial_startComponents = [text, key_resp_4]
    for thisComponent in trial_startComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trial_startClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial_start"-------
    while continueRoutine:
        # get current time
        t = trial_startClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trial_startClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        
        # *key_resp_4* updates
        waitOnFlip = False
        if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_4.frameNStart = frameN  # exact frame index
            key_resp_4.tStart = t  # local t and not account for scr refresh
            key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
            key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_4_allKeys.extend(theseKeys)
            if len(_key_resp_4_allKeys):
                key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trial_startComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial_start"-------
    for thisComponent in trial_startComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('text.started', text.tStartRefresh)
    trials.addData('text.stopped', text.tStopRefresh)
    # check responses
    if key_resp_4.keys in ['', [], None]:  # No response was made
        key_resp_4.keys = None
    trials.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        trials.addData('key_resp_4.rt', key_resp_4.rt)
    trials.addData('key_resp_4.started', key_resp_4.tStartRefresh)
    trials.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
    # the Routine "trial_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    prime_loop = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(file_name),
        seed=None, name='prime_loop')
    thisExp.addLoop(prime_loop)  # add the loop to the experiment
    thisPrime_loop = prime_loop.trialList[0]  # so we can initialise stimuli with some values
    
    for thisPrime_loop in prime_loop:
        currentLoop = prime_loop
        
        # ------Prepare to start Routine "prime"-------
        continueRoutine = True
        routineTimer.add(2.000000)
        # update component parameters for each repeat
        top_word.setText(word1)
        bot_word.setText(word2)
        # keep track of which components have finished
        primeComponents = [top_word, bot_word, fixation]
        for thisComponent in primeComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        primeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "prime"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = primeClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=primeClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *top_word* updates
            if top_word.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                top_word.frameNStart = frameN  # exact frame index
                top_word.tStart = t  # local t and not account for scr refresh
                top_word.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(top_word, 'tStartRefresh')  # time at next scr refresh
                top_word.setAutoDraw(True)
            if top_word.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > top_word.tStartRefresh + 2.0-frameTolerance:
                    # keep track of stop time/frame for later
                    top_word.tStop = t  # not accounting for scr refresh
                    top_word.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(top_word, 'tStopRefresh')  # time at next scr refresh
                    top_word.setAutoDraw(False)
            
            # *bot_word* updates
            if bot_word.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                bot_word.frameNStart = frameN  # exact frame index
                bot_word.tStart = t  # local t and not account for scr refresh
                bot_word.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(bot_word, 'tStartRefresh')  # time at next scr refresh
                bot_word.setAutoDraw(True)
            if bot_word.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > bot_word.tStartRefresh + 2.0-frameTolerance:
                    # keep track of stop time/frame for later
                    bot_word.tStop = t  # not accounting for scr refresh
                    bot_word.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(bot_word, 'tStopRefresh')  # time at next scr refresh
                    bot_word.setAutoDraw(False)
            
            # *fixation* updates
            if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation.frameNStart = frameN  # exact frame index
                fixation.tStart = t  # local t and not account for scr refresh
                fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                fixation.setAutoDraw(True)
            if fixation.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation.tStartRefresh + 2.0-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                    fixation.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in primeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "prime"-------
        for thisComponent in primeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        prime_loop.addData('top_word.started', top_word.tStartRefresh)
        prime_loop.addData('top_word.stopped', top_word.tStopRefresh)
        prime_loop.addData('bot_word.started', bot_word.tStartRefresh)
        prime_loop.addData('bot_word.stopped', bot_word.tStopRefresh)
        prime_loop.addData('fixation.started', fixation.tStartRefresh)
        prime_loop.addData('fixation.stopped', fixation.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'prime_loop'
    
    
    # set up handler to look after randomisation of conditions etc
    probe_loop = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(file_name),
        seed=None, name='probe_loop')
    thisExp.addLoop(probe_loop)  # add the loop to the experiment
    thisProbe_loop = probe_loop.trialList[0]  # so we can initialise stimuli with some values
    
    for thisProbe_loop in probe_loop:
        currentLoop = probe_loop
        
        # ------Prepare to start Routine "probe"-------
        continueRoutine = True
        routineTimer.add(5.000000)
        # update component parameters for each repeat
        top_text.setText(word1)
        probe_text.setPos((0, -.1))
        probe_text.setText(' ')
        submit.keys = []
        submit.rt = []
        _submit_allKeys = []
        # keep track of which components have finished
        probeComponents = [top_text, probe_text, submit]
        for thisComponent in probeComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        probeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "probe"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = probeClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=probeClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *top_text* updates
            if top_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                top_text.frameNStart = frameN  # exact frame index
                top_text.tStart = t  # local t and not account for scr refresh
                top_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(top_text, 'tStartRefresh')  # time at next scr refresh
                top_text.setAutoDraw(True)
            if top_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > top_text.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    top_text.tStop = t  # not accounting for scr refresh
                    top_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(top_text, 'tStopRefresh')  # time at next scr refresh
                    top_text.setAutoDraw(False)
            
            # *probe_text* updates
            if probe_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                probe_text.frameNStart = frameN  # exact frame index
                probe_text.tStart = t  # local t and not account for scr refresh
                probe_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(probe_text, 'tStartRefresh')  # time at next scr refresh
                probe_text.setAutoDraw(True)
            if probe_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > probe_text.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    probe_text.tStop = t  # not accounting for scr refresh
                    probe_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(probe_text, 'tStopRefresh')  # time at next scr refresh
                    probe_text.setAutoDraw(False)
            
            # *submit* updates
            waitOnFlip = False
            if submit.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                submit.frameNStart = frameN  # exact frame index
                submit.tStart = t  # local t and not account for scr refresh
                submit.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(submit, 'tStartRefresh')  # time at next scr refresh
                submit.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(submit.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(submit.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if submit.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > submit.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    submit.tStop = t  # not accounting for scr refresh
                    submit.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(submit, 'tStopRefresh')  # time at next scr refresh
                    submit.status = FINISHED
            if submit.status == STARTED and not waitOnFlip:
                theseKeys = submit.getKeys(keyList=['return'], waitRelease=False)
                _submit_allKeys.extend(theseKeys)
                if len(_submit_allKeys):
                    submit.keys = _submit_allKeys[-1].name  # just the last key pressed
                    submit.rt = _submit_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in probeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "probe"-------
        for thisComponent in probeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        probe_loop.addData('top_text.started', top_text.tStartRefresh)
        probe_loop.addData('top_text.stopped', top_text.tStopRefresh)
        probe_loop.addData('probe_text.text',probe_text.text)
        probe_text.reset()
        probe_loop.addData('probe_text.started', probe_text.tStartRefresh)
        probe_loop.addData('probe_text.stopped', probe_text.tStopRefresh)
        # check responses
        if submit.keys in ['', [], None]:  # No response was made
            submit.keys = None
        probe_loop.addData('submit.keys',submit.keys)
        if submit.keys != None:  # we had a response
            probe_loop.addData('submit.rt', submit.rt)
        probe_loop.addData('submit.started', submit.tStartRefresh)
        probe_loop.addData('submit.stopped', submit.tStopRefresh)
    # completed 1.0 repeats of 'probe_loop'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
