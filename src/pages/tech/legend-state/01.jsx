import {computed, observable, when, event} from '@legendapp/state'

const toggle = event()

const obs = observable({settings: {theme: 'light'}, array: [{text: 'hi'}]})

toggle.on(() =>
  obs.settings.theme.set((v) => (v === `dark` ? `light` : `dark`)),
)

obs.settings.theme.onChange((theme) => console.log('Theme is', theme))

const length = computed(() => obs.array.get().length)
length.get() // start lazy

length.onChange((v) => console.log(`length is`, v))

const dispose = when(
  () => obs.settings.theme.get() === `dark`,
  () => console.log("It's is dark"),
)

toggle.dispatch()
toggle.dispatch()

dispose()

toggle.dispatch()

obs.array.set((prev) => [...prev, {text: `foo`}])
