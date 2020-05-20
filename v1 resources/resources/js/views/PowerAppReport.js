import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

class PowerAppReport extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {
            defaultDate: new Date(),
            setDefaultDate: true,
        });
         // DT
         var dataSet = [
            {name: 'JOhn DOe', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe1', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe2', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe3', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe4', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe5', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe6', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe7', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe8', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe9', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe10', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe11', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe12', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
            {name: 'JOhn DOe13', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf'},
          ];
        
        var columnDefs = [{
            title: "Accnt #", data: 'name'
          }, {
            title: "Accnt Name", data: 'position'
          },{
            title: "Amount", data: 'salary'
          },
          {
            title: "Transaction By", data: 'aw'
          },
          {
            title: "Transaction Date", data: 'aws'
          },];

        $('#example').DataTable( {
            data: dataSet,
            columns: columnDefs,
            buttons: [
                {
                    text: '<a class="white-text"><i class="material-icons left">print</i>Print</a>',
                    extend: 'print',
                    className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn export-print',
                    title: '',
                    // exportOptions: {
                    //     rows: function ( idx, data, node ) {
                    //       var dt = new $.fn.dataTable.Api('#example' );
                    //       var selected = dt.rows( { selected: true } ).indexes().toArray();
                         
                    //       if( selected.length === 0 || $.inArray(idx, selected) !== -1)
                    //         return true;
                    
      
                    //       return false;
                    //   }
                    // }
                }
            ],
            // select: {
            //     style: 'multi',
            //     selector: 'td',
            // },
            "pagingType": "simple",
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
            "dom": '<"top"f<"right-align m-top-15" B>>rt<"row bottom"<"col s6"i><"col s6 right-align"p>><"clear">',
            "scrollX": true,
            order: [
                [1, 'asc'],
            ],
        } ); 
    }
    
    render() { 
        return ( 
            <div className="App">
                <Header title="Power-App Report" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Date Range</p>
                                    <div className="input-field col m3 s12">
                                        <input type="text" className="datepicker"/>
                                    </div>
                                    <div className="input-field col m3 s12">
                                        <input type="text" className="datepicker"/>
                                    </div>
                                    <div className="col m6 s12">
                                        <div className="input-field s12">
                                            <a className="waves-effect waves-light btn">
                                                <i className="material-icons left">cloud_upload</i>Save
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Data Result</p>
                                    <div>
                                        <table id="example" className="display" ></table>
                                        <p>
                                            Total Amount: 
                                        </p>
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
 
export default PowerAppReport;