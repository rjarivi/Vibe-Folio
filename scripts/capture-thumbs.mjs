import fs from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'

const projects = [
  { slug: 'otgstats', url: 'https://otgstats.com' },
  { slug: 'jeeting', url: 'https://infofi-hub.netlify.app' },
  { slug: 'xeenon-space', url: 'https://xeenon.space/' },
  { slug: 'parti-panels', url: 'https://f7ashp0int.github.io/partipanels/' },
  { slug: 'marblex-frame', url: 'https://f7ashp0int.github.io/marblex-frame' },
  { slug: 'parti', url: 'https://f7ashp0int.github.io/parti' },
  { slug: 'p2e-calculator', url: 'https://p2ecalculator.site/' },
  { slug: 'aspect-flow', url: 'https://rjarivi.github.io/aspect-flow' },
  { slug: 'catstanbul', url: 'https://rjarivi.github.io/catstanbul' },
  { slug: 'web3-graveyard', url: 'https://f7ashp0int.github.io/Web3-Games-Graveyard/' },
  { slug: 'gallaxia-frame', url: 'https://f7ashp0int.github.io/Gallaxia-Frame/' },
  { slug: 'tiermaker', url: 'https://tiermaker.site' },
  { slug: 'grade-calculator', url: 'https://rjarivi.github.io/Grade-Calculator/' },
]

const outDir = path.resolve('public', 'thumbs')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

async function capture() {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1280, height: 800 },
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36'
  )

  for (const { slug, url } of projects) {
    const file = path.join(outDir, `${slug}.png`)
    try {
      console.log(`Capturing ${url} -> ${file}`)
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
      await page.waitForSelector('body', { timeout: 10000 })
      await new Promise(r => setTimeout(r, 1500))
      await page.screenshot({ path: file, type: 'png' })
    } catch (err) {
      console.error(`Failed to capture ${url}:`, err.message)
    }
  }

  await browser.close()
}

capture()
