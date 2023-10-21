import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './fonts/TTF/VelaSans-Bold.ttf'
import './fonts/TTF/VelaSans-ExtraBold.ttf'
import './fonts/TTF/VelaSans-ExtraLight.ttf'
import './fonts/TTF/VelaSans-Light.ttf'
import './fonts/TTF/VelaSans-Medium.ttf'
import './fonts/TTF/VelaSans-Regular.ttf'
import './fonts/TTF/VelaSans-SemiBold.ttf'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
