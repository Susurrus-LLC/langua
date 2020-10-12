/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { toast } from 'react-toastify'

export const onServiceWorkerInstalled = () => {
  toast.success(
    'Langua has been successfully cached. You can now use it offline.',
    {
      autoClose: 5000,
      className: 'toast-cached',
      bodyClassName: 'toast-cached-body',
      progressClassName: 'toast-cached-progress'
    }
  )
  // eslint-disable-next-line
  console.log(
    'Langua has been successfully cached. You can now use it offline.'
  )
}

export const onServiceWorkerActive = () => {
  toast.info('Langua is up-to-date and loading from your cache.', {
    autoClose: 3000,
    className: 'toast-cached',
    bodyClassName: 'toast-cached-body',
    progressClassName: 'toast-cached-progress'
  })
  // eslint-disable-next-line
  console.log(
    'This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ'
  )
}

export const onServiceWorkerUpdateReady = () => {
  toast.warn('An update is available; please refresh the page to load it.', {
    autoClose: false,
    className: 'toast-update',
    bodyClassName: 'toast-update-body',
    progressClassName: 'toast-update-progress'
  })
}
