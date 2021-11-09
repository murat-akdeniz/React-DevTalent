import React from 'react'


const TableEducation = (props) => {

   return (
      props.table.map((item, index) => {

         return (
            <table className="my-table" key={index}>
               <thead>
                  <tr>
                     <th>{item.th[0]}</th>
                     <th>{item.th[1]}</th>
                     <th>{item.th[2]}</th>
                     <th>{item.th[3]}</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td className="bold" data-label={item.th[0]}>{item.class[0]}</td>
                     <td data-label={item.th[1]}>{item.school[0]}</td>
                     <td data-label={item.th[2]}>{item.country[0]}</td>
                     <td data-label={item.th[3]}>{item.date[1]}</td>

                  </tr>
                  <tr>
                     <td className="bold" data-label={item.th[0]}>{item.class[1]}</td>
                     <td data-label={item.th[1]}>{item.school[1]}</td>
                     <td data-label={item.th[2]}>{item.country[1]}</td>
                     <td data-label={item.th[3]}>{item.date[1]}</td>
                  </tr>
               </tbody>
            </table>
         )
      })


   )
}

export default TableEducation
