import '@glideapps/glide-data-grid/dist/index.css'
import * as React from 'react'
import {createDbWorker} from 'sql.js-httpvfs'
import {DataEditor, GridCellKind} from '@glideapps/glide-data-grid'

export default function App() {
  const {db, status} = useDb()
  const [table, setTable] = React.useState(null)

  if (status !== `success`) {
    return `Loading`
  }

  return (
    <>
      <div className="">
        <Tables db={db} onTableClick={setTable} />
        {table ? <Table db={db} table={table} /> : null}
      </div>
    </>
  )
}

function useDb() {
  const ref = React.useRef(null)
  const [status, setStatus] = React.useState(`start`)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    load()
      .then((db) => {
        ref.current = db
        setStatus(`success`)
      })
      .catch(setError)
  }, [])

  return {db: ref.current, status, error}
}

function Tables({db, onTableClick}) {
  const {tables, error} = useTables({db})

  return (
    <div>
      <h3>Table</h3>
      <div>
        {tables.map((doc) => (
          <div key={doc.name} onClick={() => onTableClick(doc)}>
            {doc.name}
          </div>
        ))}
      </div>
    </div>
  )
}

function useTables({db}) {
  const [tables, setTables] = React.useState([])
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    db.query(`SELECT * FROM sqlite_schema`).then(setTables).catch(setError)
  }, [db])

  return {tables, error}
}

function Table({db, table}) {
  const {rows, indexes, columns, error} = useTable({db, table})

  const getContent = React.useCallback(
    (cell) => {
      const [col, row] = cell
      const dataRow = rows[row]
      const d = `${dataRow[indexes[col]]}`
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        displayData: d,
        data: d,
      }
    },
    [rows, indexes, columns],
  )

  return (
    <div>
      <div>Table {table.name}</div>
      <div>
        <DataEditor
          getCellContent={getContent}
          columns={columns}
          rows={rows.length}
        />
      </div>
    </div>
  )
}

function useTable({db, table}) {
  const [cols, setCols] = React.useState([])
  const [rows, setRows] = React.useState([])
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    db.query(`SELECT * FROM ${table.name}`).then(setRows).catch(setError)
    db.query(`PRAGMA table_info(${table.name})`)
      .then(setCols)
      .catch(console.log)
  }, [db, table, setRows])

  const indexes = cols.map((item) => item.name)

  const columns = indexes.map((name) => ({
    title: name,
    id: name,
  }))

  return {rows, indexes, columns, error}
}

const workerUrl = '/public/sqlite.worker.js'
const wasmUrl = '/public/sql-wasm.wasm'
const url = `/1.db`

async function load() {
  const worker = await createDbWorker(
    [
      {
        from: 'inline',
        config: {
          serverMode: 'full',
          url,
          requestChunkSize: 4096,
        },
      },
    ],
    workerUrl,
    wasmUrl,
  )

  return worker.db
}
