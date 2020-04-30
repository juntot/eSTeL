import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

const $ = window.$;
class ResultPosting extends React.Component{
    componentDidMount(){
        M.updateTextFields();

        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems,{
            defaultDate: new Date(),
            setDefaultDate: true,
            disable: [
                new Date(2019,3,13),
                new Date(2020,3,29)]
        });

        elems = document.querySelectorAll('.timepicker');
        var instances = M.Timepicker.init(elems,{
            defaultTime: 'now'
        });
        
        instances[0]._updateTimeFromInput();
        instances[0].done();


        elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);

        // datpicker for modals
        elems = document.querySelectorAll('.datepicker-modals');
        M.Datepicker.init(elems,{
            defaultDate: new Date(),
            // setDefaultDate: true,
            disable: [
                new Date(2019,3,13),
                new Date(2020,3,29)],
            container: 'body'

        });

        elems = document.querySelectorAll('.timepicker-modal');
        M.Timepicker.init(elems,{
            defaultTime: 'now',
            container: 'body',
        });

        

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
            title: "Acct #", data: 'name'
          }, {
            title: "Trans #", data: 'position'
          },{
            title: "Combination", data: 'salary'
          },
          {
            title: "Straight", data: 'aw'
          },
          {
            title: "Rumble", data: 'aws'
          },
          {
            title: "Total Bet", data: 'awss'
          },
          {
            title: "Time Posted", data: 'awss'
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
                                        <a className="waves-effect waves-light btn modal-trigger" href="#modal-res-posting">Add Posting</a>
                                    </p>
                                </div>
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <br/>
                                    {/* <div className="d-flex mobile-block res-posting"> */}
                                        <div className="input-field col m4 s12 m-select-option">
                                            <select>
                                                <option value="" disabled defaultValue >Choose your option</option>
                                                <option value="1">Pares</option>
                                                <option value="2">Swer 2</option>
                                                <option value="3">Swer 3</option>
                                            </select>
                                            <label>Game type</label>
                                        </div>
                                        <div className="m-date-picker input-field col m3 s12">
                                            <input type="text" className="datepicker" />
                                            <label>Date Draw</label> 
                                        </div>
                                        <div className="input-field col m3 s12">
                                            <input type="text" className="timepicker"  />
                                            <label>Schedule</label> 
                                        </div>
                                        <div className="input-field padding-sides-0 col m2 s12 right-align">
                                            <button className="btn waves-effect waves-light" type="submit" name="action">Load
                                                <i className="material-icons left">cloud_download</i>
                                            </button>                            
                                        </div>
                                    {/* </div> */}
                                    
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Data Result</p>
                                    

                                    <table id="example" className="display" ></table>
                                    <p> </p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Modal Structure --> */}
                        <div id="modal-res-posting" className="modal modal-fixed-footer modal-result-posting">
                            <div className="modal-content">
                                <div className="row">
                                    {/* <div className="col m6 s12">
                                        <div className="input-field"> 
                                            <input type="text" className="datepicker-modal" />
                                            <label>Date Draw</label> 
                                        </div>
                                    </div> */}
                                    <div className="m-date-picker input-field col m4 s12">
                                        <input type="text" className="datepicker-modals" />
                                        <label>Date Draw</label> 
                                    </div>
                                        
                                    {/* </div> */}
                                    <div className="col m8 s12">
                                        <div className="input-field">
                                            <input type="text" className="timepicker-modal"  />
                                            <label>Schedule</label> 
                                        </div>
                                    </div>
                                    <div className="col m4 s12">
                                        <div className="input-field">
                                            <input id="modal-ball1" type="text" />
                                            <label className="active" htmlFor="modal-ball1">Ball 1</label>
                                        </div>
                                    </div>
                                    <div className="col m4 s12">
                                        <div className="input-field">
                                            <input id="modal-ball2" type="text" />
                                            <label className="active" htmlFor="modal-ball2">Ball 2</label>
                                        </div>
                                    </div>
                                    <div className="col m4 s12">
                                        <div className="input-field">
                                            <input id="modal-ball3" type="text" />
                                            <label className="active" htmlFor="modal-ball3">Ball 3</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button className="btn waves-effect waves-light" type="submit" name="action">
                                    Add Post
                                </button>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}
export default ResultPosting;