import React from "react"
import './index.scss'
import styles from './App.module.scss'

let sidePanelData = new Array(100).fill('side panel desktop')
let mainContentData = new Array(10000).fill('content')

const App:React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.sidePanel + ' ' + styles.testSidePanel}>
                <div className={'sidePanel_desktop'}>
                    {
                        sidePanelData.map(i => i)
                    }

                    side panel desktop
                </div>
                <div className={'sidePanel_mobile'}>
                    side panel mobile
                </div>
            </div>
            <div className={styles.mainArea  + ' ' + styles.testMainArea}>
                <div className={'appBar'}>
                    app bar
                </div>
                <div className={'content'}>
                    <div>
                        {
                            mainContentData.join(' ')
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
