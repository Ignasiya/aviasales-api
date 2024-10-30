import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Online, Offline } from 'react-detect-offline'
import TicketLayout from '@/modules/tickets/layouts/TicketLayout'
import WarningOffline from '@/components/WarningOffline'
import { Provider } from 'react-redux'
import store from '@/store'
import './styles/main.scss'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Online>
        <Provider store={store}>
          <TicketLayout />
        </Provider>
      </Online>
      <Offline>
        <WarningOffline />
      </Offline>
    </StrictMode>
  )
} else {
  console.error('Failed to find root element with id "root"')
}
