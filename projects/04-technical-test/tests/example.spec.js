// @ts-check
import { test, expect } from '@playwright/test'
import { PREFIX_URL_CAT_IMAGE } from '../src/constants'

const LOCAL_HOST_URL = 'http://localhost:5173/'

test('app shows random cat fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(PREFIX_URL_CAT_IMAGE)).toBeTruthy()
})
