const map = {
  'United Kingdom': 'IEIM402040',
  Finland: '1234567-8',
}

const tinNumberPlaceholder = (onboardedCountry) => {
  const tin = map[onboardedCountry]
  if (tin) {
    setTinNumberPlaceHolder(tin)
  }
}
