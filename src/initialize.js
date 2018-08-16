export default class Initialize {
  static typekit() {
    const script = document.createElement('script')
    script.src = 'https://use.typekit.net/fsn1pjp.js'
    script.addEventListener('load', () => {
      window.Typekit.load({ async: true })
    })

    document.head.appendChild(script)
  }

  static tagManager() {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    })

    const script = document.createElement('script')
    const src = new window.URL('https://www.googletagmanager.com/gtm.js')
    const srcParams = {
      id: 'GTM-P9LJ5CK',
      l: 'dataLayer',
    }

    Object.entries(srcParams).forEach(([name, value]) =>
      src.searchParams.append(name, value)
    )

    script.async = true
    script.src = src

    document.head.appendChild(script)
  }
}
