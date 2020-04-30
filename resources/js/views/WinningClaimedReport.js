import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

class WinningClaimedReport extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {
            defaultDate: new Date(),
            setDefaultDate: true,
        });

        elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
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
            title: "Req ID", data: 'name'
          }, {
            title: "Accnt #", data: 'position'
          },{
            title: "Req Date", data: 'salary'
          },
          {
            title: "Trans #", data: 'aw'
          },
          {
            title: "Total Amt", data: 'aws'
          },
          {
            title: "Encashment type", data: 'aws'
          },
          {
            title: "Remittance Name", data: 'aws'
          },
          {
            title: "Address", data: 'aws'
          },
          {
            title: "Confirmed", data: 'aws'
          }];

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
                <Header title="Winninging Claimed Report" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <div className="col m4 s12 m-tb-15">
                                        <label className="input-field">
                                            <input className="with-gap" name="group3" type="radio"/>
                                            <span>Claimed Commission Report</span>
                                        </label>
                                    </div>
                                    <div className="col m4 s12 m-tb-15">
                                        <label className="input-field">
                                            <input className="with-gap" name="group3" type="radio"/>
                                            <span>Claimed Commission Report</span>
                                        </label>
                                    </div>
                                    <div className="col m4 s12 m-tb-15">
                                        <label className="input-field">
                                            <input className="with-gap" name="group3" type="radio"/>
                                            <span>Claimed Commission Report</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Date Range</p>
                                  
                                    <div className="m-date-picker input-field col m4 s12">
                                        <input type="text" className="datepicker" />
                                        <label>Date from</label> 
                                    </div>
                                    <div className="m-date-picker input-field col m4 s12">
                                        <input type="text" className="datepicker" />
                                        <label>Date to</label> 
                                    </div>
                                    
                                    <div className="input-field col m2 s12 left-align">
                                        <button className="btn waves-effect waves-light" type="submit" name="action">Load
                                            <i className="material-icons left">cloud_download</i>
                                        </button>                            
                                    </div>
                                    
                                </div>
                                
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Data Result</p>
                                    <table id="example" className="display" ></table>
                                    <div className="m-tb-15 col m4 s12 padding-left-0">
                                        Total Amount:
                                    </div>
                                    
                                    <div className="clearfix"></div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
         );
    }
}
 
export default WinningClaimedReport;