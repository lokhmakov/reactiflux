// import dayjs from 'dayjs'
// import React, {useEffect, useState} from 'react'
// import {Button, DialogActions, TextField, Typography} from '@mui/material'
// import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
// import {DatePicker} from '@mui/x-date-pickers/DatePicker'
// import {TimePicker} from '@mui/x-date-pickers/TimePicker'
// import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
// import Stack from '@mui/material/Stack'
// import trLocale from 'dayjs/locale/tr'
// import Modal from 'react-bootstrap/Modal'
// import PatientsRecord from '../../components/PatientsRecord/PatientsRecord'
// import ListPolyclinics from '../ListPolyclinics'
// import AppointmentService from '../../services/AppointmentService'

// function AppointmentAddComponent(props) {
//   const date = new Date(props.scheduler.state.start.value)
//   const [datePickerValue, setDatePickerValue] = useState(
//     date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay(),
//   )
//   const [timePickerValue, setTimePickerValue] = useState(dayjs())

//   const [showPatients, setShowPatients] = useState(false)
//   const [showPolyclinics, setShowPolyclinics] = useState(false)
//   const [selectedPatient, setSelectedPatient] = useState(null)
//   const [selectedPolyclinic, setSelectedPolyclinic] = useState(null)

//   const localeMap = {
//     tr: trLocale,
//   }

//   const [locale, setLocale] = useState('tr')

//   const handleClose = () => {
//     props.scheduler.close()
//   }

//   const handleModalClose = () => {
//     setShowPatients(false)
//   }

//   const handleShowPatients = () => {
//     setShowPatients(true)
//   }

//   const handleShowPolyclinics = () => {
//     setShowPolyclinics(true)
//   }

//   const handleModalClosePolScreen = () => {
//     setShowPolyclinics(false)
//   }

//   const selectPolyclinic = (polyclinic) => {
//     setSelectedPolyclinic(polyclinic)
//   }

//   const handleSubmit = () => {
//     AppointmentService.createAppointment({
//       patiendId: selectedPatient.id,
//       polyclinicId: selectedPolyclinic.id,
//       appDate: datePickerValue.format('YYYY-MM-DD'),
//       appTime: timePickerValue.format('hh:mm'),
//     }).then()
//     handleClose()
//   }

//   useEffect(() => {
//     setDatePickerValue()
//     setTimePickerValue(date.getTime())
//   }, [date])

//   return (
//     <div>
//       <Modal
//         show={showPatients}
//         onHide={handleModalClose}
//         style={{zIndex: 999999999}}
//         size="xl"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Hastalar</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <PatientsRecord
//             mode="SELECTION"
//             setSelectedPatient={setSelectedPatient}
//             selectedPatient={selectedPatient}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleModalClose}>
//             Kapat
//           </Button>
//           <Button
//             variant="primary"
//             onClick={handleModalClose}
//             disabled={selectedPatient === null}
//           >
//             Onayla
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <Modal
//         show={showPolyclinics}
//         onHide={handleModalClosePolScreen}
//         style={{zIndex: 999999999}}
//         size="lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Poliklinikler</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <ListPolyclinics
//             mode="SELECTION"
//             selectForPolyclinic={selectPolyclinic}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleModalClosePolScreen}>
//             Kapat
//           </Button>
//           <Button
//             variant="primary"
//             onClick={handleModalClosePolScreen}
//             disabled={selectedPolyclinic === null}
//           >
//             Onayla
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <div style={{marginLeft: '25px', marginRight: '25px'}}>
//         <br />
//         <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
//           Randevu
//         </Typography>
//         {selectedPatient ? (
//           <span>
//             {selectedPatient.firstName} {selectedPatient.lastName}
//           </span>
//         ) : (
//           ''
//         )}

//         <Button onClick={() => handleShowPatients()}>Hasta Seç</Button>
//         <br />
//         {selectedPolyclinic ? <span>{selectedPolyclinic.polyName}</span> : ''}
//         <Button onClick={() => handleShowPolyclinics()}>Poliklinik Seç</Button>

//         <LocalizationProvider
//           dateAdapter={AdapterDayjs}
//           adapterLocale={localeMap[locale]}
//         >
//           <Stack spacing={2}>
//             <DatePicker
//               value={datePickerValue}
//               onChange={(newValue) => setDatePickerValue(newValue)}
//               renderInput={(params) => <TextField {...params} />}
//             />
//             <TimePicker
//               value={timePickerValue}
//               onChange={(newValue) => setTimePickerValue(newValue)}
//               renderInput={(params) => <TextField {...params} />}
//             />
//           </Stack>
//         </LocalizationProvider>
//       </div>
//       <DialogActions>
//         <Button onClick={() => handleSubmit()}>Kaydet</Button>
//         <Button onClick={() => handleClose()}>Kapat</Button>
//       </DialogActions>
//     </div>
//   )
// }
// export default AppointmentAddComponent
