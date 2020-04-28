import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

const $ = window.$;
class ResultPosting extends React.Component{
    componentDidMount(){
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems,{
            defaultDate: new Date(),
            setDefaultDate: true,
        });

        elems = document.querySelectorAll('.timepicker');
        var instances = M.Timepicker.init(elems,{
            defaultTime: 'now'
        });
        
        instances[0]._updateTimeFromInput();
        instances[0].done();


        elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);

        // DT
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

        $('#example').DataTable( {
            data: dataSet,
            columns: columnDefs,
            buttons: [
                {
                    text: '<a class="white-text"><i class="material-icons left">print</i>Print</a>',
                    extend: 'print',
                    className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn export-print',
                    title: '',
                    exportOptions: {
                        rows: function ( idx, data, node ) {
                          var dt = new $.fn.dataTable.Api('#example' );
                          var selected = dt.rows( { selected: true } ).indexes().toArray();
                         
                          if( selected.length === 0 || $.inArray(idx, selected) !== -1)
                            return true;
                    
      
                          return false;
                      }
                    }
                }
            ],
            select: {
                style: 'multi',
                selector: 'td',
            },
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
    render(){
        return(
            <div className="App">
                <Header title="Result Posting" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>
                                        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
                                    </p>

                                    <div className="d-flex mobile-block res-posting">
                                        <div className="input-field col m4 s12 m-select-option">
                                            <select>
                                                <option value="" disabled defaultValue >Choose your option</option>
                                                <option value="1">Pares</option>
                                                <option value="2">Swer 2</option>
                                                <option value="3">Swer 3</option>
                                                </select>
                                            <label></label>
                                        </div>
                                        <div className="input-field col m3 s12">
                                            <div className="m-date-picker">
                                                <input type="text" className="datepicker" />
                                            </div>
                                        </div>
                                        <div className="input-field col m3 s12">
                                            <div>
                                                <input type="text" className="timepicker"  />
                                            </div>
                                        </div>
                                        <div className="input-field col padding-sides-0 m2 s12 right-align">
                                            <button className="btn waves-effect waves-light" type="submit" name="action">Load
                                                <i className="material-icons left">cloud_download</i>
                                            </button>                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Select Recipients</p>
                                    

                                    <table id="example" className="display" ></table>
                                    <p> </p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Modal Structure --> */}
                        <div id="modal1" className="modal">
                            <div className="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}
export default ResultPosting;