import * as T from '@effect/io/Effect'
import * as Ref from '@effect/io/Ref'
import {pipe} from '@fp-ts/data/Function'
import * as Option from '@fp-ts/data/Option'
import {assert, describe, it} from 'vitest'

const current = 'value'
const update = 'new value'

type State = Active | Changed | Closed

interface Active {
  readonly _tag: 'Active'
}

interface Changed {
  readonly _tag: 'Changed'
}

interface Closed {
  readonly _tag: 'Closed'
}

export const Active: State = {_tag: 'Active'}
export const Changed: State = {_tag: 'Changed'}
export const Closed: State = {_tag: 'Closed'}

const isActive = (self: State): boolean => self._tag === 'Active'
const isChanged = (self: State): boolean => self._tag === 'Changed'
const isClosed = (self: State): boolean => self._tag === 'Closed'

describe('Ref', () => {
  it(`get`, () => {
    const program = pipe(Ref.make(current), T.flatMap(Ref.get))
    const result = T.unsafeRunSync(program)
    assert.strictEqual(result, current)
  })

  it(`getAndSet`, async () => {
    const program = T.gen(function* () {
      const ref = yield* Ref.make<State>(Active)
      const result1 = yield* pipe(
        ref,
        Ref.getAndUpdateSome((state) =>
          isClosed(state) ? Option.some(Changed) : Option.none,
        ),
      )
      const result2 = yield* Ref.get(ref)
      assert.strictEqual(result1, Active)
      assert.strictEqual(result2, Active)
    })
    await T.unsafeRunPromise(program)
  })
})
