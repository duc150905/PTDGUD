import React from 'react'

function StudentInfo(props) {
  return (
    <div>
        <p><strong>Họ tên:</strong>{props.name}</p>
        <p><strong>MSSV:</strong>{props.mssv}</p>
        <p><strong>Lớp:</strong>{props.lop}</p>
    </div>
  )
}

export default StudentInfo