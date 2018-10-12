import { toast } from 'react-toastify'

// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)

export default function register () {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location)
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl)

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          toast.info('Langua is up-to-date and loading from your cache.', {
            autoClose: 3000,
            className: 'toast-cached',
            bodyClassName: 'toast-cached-body',
            progressClassName: 'toast-cached-progress'
          })
          // eslint-disable-next-line
          console.log('This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ')
        })
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl)
      }
    })
  }
}

function registerValidSW (swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              toast.warn('An update is available; please refresh the page to load it.', {
                autoClose: false,
                className: 'toast-update',
                bodyClassName: 'toast-update-body',
                progressClassName: 'toast-update-progress'
              })
              // eslint-disable-next-line
              console.log('An update is available; please refresh the page to load it.')
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              toast.success('Langua has been successfully cached. You can now use it offline.', {
                autoClose: 5000,
                className: 'toast-cached',
                bodyClassName: 'toast-cached-body',
                progressClassName: 'toast-cached-progress'
              })
              // eslint-disable-next-line
              console.log('Langua has been successfully cached. You can now use it offline.')
            }
          }
        }
      }
    })
    .catch(error => {
      // eslint-disable-next-line
      console.error('Error during service worker registration:', error)
    })
}

function checkValidServiceWorker (swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  window.fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload()
          })
        })
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl)
      }
    })
    .catch(() => {
      toast.info('No internet connection found; Langua is running in offline mode.', {
        autoClose: 5000,
        className: 'toast-offline',
        bodyClassName: 'toast-offline-body',
        progressClassName: 'toast-offline-progress'
      })
      // eslint-disable-next-line
      console.log('No internet connection found; Langua is running in offline mode.')
    })
}

export function unregister () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }
}
