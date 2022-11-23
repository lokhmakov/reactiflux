import * as React from 'react'

const ErrorHandler = (type, message) => {
  if (type === 'error') {
    return toast.error(message, {
      id: 'single',
      duration: 4000,
      style: {
        backgroundColor: 'black',
        border: '1px solid #D084E3',
        color: 'white',
        boxShadow: '0px 0px 30px #D084E3',
      },
    })
  } else if (type === 'success') {
    return toast.success(message, {
      id: 'single',
      duration: 4000,
      style: {
        backgroundColor: 'black',
        border: '1px solid #D084E3',
        color: 'white',
        boxShadow: '0px 0px 30px #D084E3',
      },
    })
  } else {
    toast.loading('მიმდინარეობს ინფორმაციის მიღება...', {
      id: 'single',
      duration: 8000,
      style: {
        backgroundColor: 'black',
        border: '1px solid #D084E3',
        color: 'white',
        boxShadow: '0px 0px 30px #D084E3',
      },
    })
  }
}

export default function App() {
  const foo = React.useMemo((type, message) => {
    if (type === 'error') {
      return toast.error(message, {
        id: 'single',
        duration: 4000,
        style: {
          backgroundColor: 'black',
          border: '1px solid #D084E3',
          color: 'white',
          boxShadow: '0px 0px 30px #D084E3',
        },
      })
    } else if (type === 'success') {
      return toast.success(message, {
        id: 'single',
        duration: 4000,
        style: {
          backgroundColor: 'black',
          border: '1px solid #D084E3',
          color: 'white',
          boxShadow: '0px 0px 30px #D084E3',
        },
      })
    } else {
      toast.loading('მიმდინარეობს ინფორმაციის მიღება...', {
        id: 'single',
        duration: 8000,
        style: {
          backgroundColor: 'black',
          border: '1px solid #D084E3',
          color: 'white',
          boxShadow: '0px 0px 30px #D084E3',
        },
      })
    }
  }, [])

  return null
}
