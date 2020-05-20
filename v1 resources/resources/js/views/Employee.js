import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar'
import '../../css/datatablehelper.css';


class Employee extends React.Component {


    componentDidMount(){
        
        var dataSet = [
            {name: 'JOhn DOe', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe1', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe2', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe3', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe4', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe5', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe6', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe7', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe8', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe9', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe10', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe11', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe12', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
            {name: 'JOhn DOe13', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
          ];
        
          var columnDefs = [{
            title: "Name", data: 'name'
          }, {
            title: "Position", data: 'position'
          },{
            title: "Salary", data: 'salary'
          },
          {
            title: "aw", data: 'aw'
          },
          {
            title: "aws", data: 'aws'
          },
          {
            title: "awss", data: 'awss'
          }];
        
        window.$('#example').DataTable({
            // "sPaginationType": "simple_numbers",
            // "bInfo": false,
            // "pageLength": 5,
            "pagingType": "simple",
            data: dataSet,
            columns: columnDefs,
            language: {
              search: '',
              searchPlaceholder: "Search records",
              paginate: {
                next: '<i class="material-icons">keyboard_arrow_right</i>', // or '→'
                previous: '<i class="material-icons">keyboard_arrow_left</i>' // or '←' 
              },
              lengthMenu: "Display _MENU_ records per page",
              zeroRecords: "Nothing found - sorry",
              // info: "_START_ _PAGE_ of _PAGES_",
              info: "_START_ - _END_ of _TOTAL_",
              infoEmpty: "No records available",
              infoFiltered: "(filtered from _MAX_ total records)"
            },
            "dom": '<"top"f>rt<"row bottom"<"col s6"i><"col s6 right-align"p>><"clear">',
            "scrollX": true,
            
          });
        


        
    }
    render() { 
        return ( 
            <div className="App">
                <Header title="Employee"/>
                <article>
                    <SideBar />
                    <main>
                        <div className="row padding-all-15">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg">
                                    <div className="datatable-container">
                                        <table id="example" className="highlight dataTable"></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
         );
    }
}
 
export default Employee;