// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        } 
    }

    handleBitrateClick = () => {
        this.setState(prevState => {
            return {            
                settings: {
                    ...prevState.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleResClick = () => {
        this.setState(prevState => {
            return {            
                settings: {
                    ...prevState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitrateClick}>Change Bitrate</button>
                <button className='resolution' onClick={this.handleResClick}>Change Resolution</button>
            </div>
        )
    }
}
export default YouTubeDebugger