
let PlayPause = (props) => {
  return (
    <div id='playPauseCon'>
      <svg id='playPause' className={props.name} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="ic_fluent_video_play_pause_24_regular" fill="#212121" fillRule="nonzero">
                  <path d="M3.65140982,6.61646219 L11.1528787,11.3693959 C11.3672679,11.5052331 11.4827597,11.722675 11.4993749,11.9464385 L11.4984593,7.25 C11.4984593,6.83578644 11.8342458,6.5 12.2484593,6.5 L15.2484593,6.5 C15.6626729,6.5 15.9984593,6.83578644 15.9984593,7.25 L15.9984593,16.75 C15.9984593,17.1642136 15.6626729,17.5 15.2484593,17.5 L12.2484593,17.5 C11.8342458,17.5 11.4984593,17.1642136 11.4984593,16.75 L11.4993494,12.0597632 C11.4826318,12.2835468 11.3670166,12.5009613 11.1525249,12.6366956 L3.65105604,17.3837618 C3.15168144,17.6997752 2.5,17.3409648 2.5,16.75 L2.5,7.25 C2.5,6.65884683 3.15205264,6.30006928 3.65140982,6.61646219 Z M21.2477085,6.50037474 C21.661922,6.50037474 21.9977085,6.83616118 21.9977085,7.25037474 L21.9977085,16.7496253 C21.9977085,17.1638388 21.661922,17.4996253 21.2477085,17.4996253 L18.2477085,17.4996253 C17.8334949,17.4996253 17.4977085,17.1638388 17.4977085,16.7496253 L17.4977085,7.25037474 C17.4977085,6.83616118 17.8334949,6.50037474 18.2477085,6.50037474 L21.2477085,6.50037474 Z M14.4984593,8 L12.9984593,8 L12.9984593,16 L14.4984593,16 L14.4984593,8 Z M20.4977085,8.00037474 L18.9977085,8.00037474 L18.9977085,15.9996253 L20.4977085,15.9996253 L20.4977085,8.00037474 Z M4,8.61307154 L4,15.3878289 L9.34954018,12.0025424 L4,8.61307154 Z" id="🎨-Color"></path>
              </g>
          </g>
      </svg>
    </div>
    
  )
}

let Reset = (props) => {
  return (
    <div id='resetCon'>
      <svg id='resetBtn' className={props.name} width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"
          fill="currentColor"
        />
      </svg>
    </div>
    
  )
}

let Increment = (props) => {
  return (
    <div className='btn' id={props.id}>
      <svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
        <path d="M24.0607 10L24.024 38" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 24L38 24" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    </div>
    
  )
} 

let Decrement = (props) => {
  return (
    <div className='btn minus' id={props.id}>
    <svg width="24px" height="24px" viewBox="-5 -11 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-minus"><path d='M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z'/></svg>
    </div>
  )
}

// svg Con end

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      setSession: 25,
      setBreak: 5,
      sessionTimer: [25, 0],
      breakTimer: [5, 0],
      timerStatus: 'inactive',
      powerLoop: false,
      loopRunning: false,
      counter: 0,
      currentTimer: 'Session',
      currentCount: '25:00',
      zeroDetected: false,
      sessionPer: 0,
      breakPer: 0
    }
    this.clickTest = this.clickTest.bind(this)
    this.sessionHandle = this.sessionHandle.bind(this)
    this.breakHandle = this.breakHandle.bind(this)
    this.timerHandle = this.timerHandle.bind(this)
    this.timer = this.timer.bind(this)
    this.countdownTimer = this.countdownTimer.bind(this)
    this.reset = this.reset.bind(this)
    this.currentTimer = this.currentTimer.bind(this)
    this.setTime = this.setTime.bind(this)
    this.labelInfo = this.labelInfo.bind(this)
  }

  clickTest() {
    this.setState(state => ({
      sessionTimer: [state.sessionTimer[0], state.sessionTimer[1] + 1]
    }))
  }

  sessionHandle(type) {
    if (!this.state.loopRunning) {
      if (type == 'inc' && this.state.setSession < 60) {
        this.setState(state => ({
          setSession: state.setSession + 1,
          sessionTimer: [state.setSession + 1, 0]
        }))
      } else if (type == 'dec' && this.state.setSession > 1) {
        this.setState(state => ({
          setSession: state.setSession - 1,
          sessionTimer: [state.setSession - 1, 0]
        }))
      }
    }
    if (this.state.currentTimer == 'Session') {
      setTimeout(() => {
        this.setTime(this.state.sessionTimer)
      }, 0);
    }
  }

  breakHandle(type) {
    if (!this.state.loopRunning) {
      if (type == 'inc' && this.state.setBreak < 60) {
        this.setState(state => ({
          setBreak: state.setBreak + 1,
          breakTimer: [state.setBreak + 1, 0]
        }))
      } else if (type == 'dec' && this.state.setBreak > 1) {
        this.setState(state => ({
          setBreak: state.setBreak - 1,
          breakTimer: [state.setBreak - 1, 0]
        }))
      }
    }
    if (this.state.currentTimer == 'Break') {
      setTimeout(() => {
        this.setTime(this.state.breakTimer)
      }, 0);
    }
  }

  timerHandle() {
    this.setState(state => ({
      powerLoop: !state.powerLoop
    }))

    setTimeout(() => {
      if (!this.state.loopRunning) {
        setTimeout(this.timer, 1000);
        this.setState({
          loopRunning: true
        })
      }
    }, 0)
  }

  timer() {
    if (this.state.powerLoop) {
      this.setState(state => ({
        counter: state.counter + 1
      }))
      this.countdownTimer()
      setTimeout(this.timer, 1000);
    } else if (!this.state.powerLoop) {
      clearTimeout(this.timer)
      this.setState({
        loopRunning: false
      })
    }
  }

  countdownTimer() {
    console.log('ran 5')
    if (this.state.currentTimer == 'Session') {
      if (this.state.sessionTimer[1] > 0) {
        this.setState(state => ({
          sessionTimer: [state.sessionTimer[0], state.sessionTimer[1] - 1]
        }))
      } else if (this.state.sessionTimer[0] > 0 && this.state.sessionTimer[1] == 0) {
        this.setState(state => ({
          sessionTimer: [state.sessionTimer[0] - 1, 59]
        }))
      } else if (this.state.sessionTimer[0] == 0 && this.state.sessionTimer[1] == 0 && !this.state.zeroDetected) {
        console.log('ran 7')
        this.setState(state => ({
          breakTimer: [state.setBreak, 0],
          zeroDetected: true
        }))
        
      } else if (this.state.sessionTimer[0] == 0 && this.state.sessionTimer[1] == 0 && this.state.zeroDetected) {
        console.log('ran 8')
        this.setState(state => ({
          currentTimer: 'Break',
          zeroDetected: false
        }))
          
          this.setTime(this.state.breakTimer)
        
        return this.playAud()
      }
      setTimeout(() => {
        this.setTime(this.state.sessionTimer)
      }, 0);
    } else if (this.state.currentTimer == 'Break') {
      if (this.state.breakTimer[1] > 0) {
        this.setState(state => ({
          breakTimer: [state.breakTimer[0], state.breakTimer[1] - 1]
        }))
      } else if (this.state.breakTimer[0] > 0 && this.state.breakTimer[1] == 0) {
        this.setState(state => ({
          breakTimer: [state.breakTimer[0] - 1, 59]
        }))
      } else if (this.state.breakTimer[0] == 0 && this.state.breakTimer[1] == 0 && !this.state.zeroDetected) {
        console.log('ran 7')
        this.setState(state => ({
          sessionTimer: [state.setSession, 0],
          zeroDetected: true
        }))
        
      } else if (this.state.breakTimer[0] == 0 && this.state.breakTimer[1] == 0 && this.state.zeroDetected) {
        this.setState(state => ({
          currentTimer: 'Session',
          zeroDetected: false
        }))
          
          this.setTime(this.state.sessionTimer)
        
        return this.playAud()
      }
      setTimeout(() => {
        this.setTime(this.state.breakTimer)
      }, 0);
    }
    
  }

  currentTimer() {
    return (
      <div id='time-left'>{this.state.currentCount}</div>
    )
  }

  setTime(time) {
    let result = []

    if (time[0].toString().length < 2) {
      result.push(`0${time[0]}`)
    } else {
      result.push(time[0])
    }

    if (time[1].toString().length < 2) {
      result.push(`0${time[1]}`)
    } else {
      result.push(time[1])
    }

    this.setState({
      currentCount: result.join(':')
    })
  }

  playAud() {
    document.getElementById('beep').play()
  }

  reset() {
    document.getElementById('beep').load()
    this.setState(state => ({
      powerLoop: false,
      setSession: 25,
      setBreak: 5,
      sessionTimer: [25, 0],
      breakTimer: [5, 0],
      currentTimer: 'Session',
      currentCount: '25:00',
      zeroDetected: false
    }))
  }

  labelInfo() {
    if (this.state.currentTimer == 'Session') {
      return (
        <div id='timer-label'>Session</div>
      )
    } else if (this.state.currentTimer == 'Break') {
      return (
      <div id='timer-label'>Break</div>
      )
    }
  }

  incOrDecAnim(element) {
    let elem = document.getElementById(element)
    let child = elem.firstChild
    if (!/clicked/.test(child.className.baseVal)) {
      child.className.baseVal = 'clicked'
    } else {
      child.className.baseVal = ''
      setTimeout(() => {
        child.className.baseVal = 'clicked'
      }, 0)
    }
  }



  render() {
    
    let sessionPer = Math.floor(((this.state.sessionTimer[0] * 60 + this.state.sessionTimer[1]) / (this.state.setSession * 60)) * 10000) / 100
    let breakPer = Math.floor(((this.state.breakTimer[0] * 60) + this.state.breakTimer[1]) / (this.state.setBreak * 60) * 10000) / 100
    return (
      <div className='timer'>
        <div className='controls'>
          <div className='session part'>
            <div className='session_info'>
              <div id='session-label'>Session length</div>
              <div id='session-length'>{this.state.setSession}</div>
            </div>
            <div className='session-control control'>
              <div onClick={() => {this.sessionHandle('inc'); this.incOrDecAnim('sessInc')}} id='session-increment'>
                <Increment id={'sessInc'}/>
              </div>
              <div id='session-decrement' onClick={() => {this.sessionHandle('dec'); this.incOrDecAnim('sessDec')}}>
                <Decrement id='sessDec'/>
              </div>
            </div>
          </div>
          <div className='break part'>
            <div className='break_info'>
              <div id='break-label'>Break length</div>
              <div id='break-length'>{this.state.setBreak}</div>
            </div>
            <div className='break-control control'>
              <div id='break-increment' onClick={() => {this.breakHandle('inc'); this.incOrDecAnim('breakInc')}}>
                <Increment id='breakInc'/>
              </div>
              <div id='break-decrement' onClick={() => {this.breakHandle('dec'); this.incOrDecAnim('breakDec')}}>
              <Decrement id='breakDec' />
              </div>
            </div>
          </div>
          <div className='timer_controls'>
            <p>Play/Pause or Reset</p>
            <div className='control'>
              <div id='start_stop' onClick={() => {this.timerHandle(); this.incOrDecAnim('playPauseCon')}}>
                <PlayPause /> 
              </div>
              <div onClick={() => {this.reset(); this.incOrDecAnim('resetCon')}} id='reset'>
                <Reset />
              </div>
            </div>
            
          </div>
        </div>
        <div className='timer_display'>
          <div className='timer-graph'>
            <div className='graphCon'>
              <div className='graph' id='session-graph'>
                <div className='barCon'>
                  <div className='bar' style={{bottom: `${-100 + sessionPer}%`}}></div>
                </div>
              </div>
              <h3>Session</h3>
            </div>
            <div className='graphCon'>
              <div className='graph' id='break-graph'>
                <div className='barCon'>
                  <div className='bar' style={{bottom: `${-100 + breakPer}%`}}></div>
                </div>
              </div>
              <h3>Break</h3>
            </div>
            
          </div>
          <div className='current_timer'>
            <this.currentTimer />
            <this.labelInfo />
          </div>
        </div>
        <audio id='beep' src='https://cdn.discordapp.com/attachments/748044435241173022/1015939307653050368/ce1574c83d90b4cd048b2dab8e42cab5dba476f630ca71709d6a0df81975ca0a-1mp4_x6TlnDAn.mp3'></audio>
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)