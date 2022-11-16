import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'caramel', label: 'Caramel CupCakes' },
  { value: 'marschoc', label: 'Marschoc CupCakes' },
  { value: 'oreo', label: 'Oreo CupCakes' },
  { value: 'turchoc', label: 'Turkis Chocolate CupCakes' },
  { value: 'stroberi', label: 'Strawberry CupCakes' },
  { value: 'mixberies', label: 'MixBerries CupCakes' },
  { value: 'rainbow', label: 'Rainbow CupCakes' },
  { value: 'choco', label: 'Choco CupCakes' }
]

const MyComponent = () => (
  <Select options={options} />
)