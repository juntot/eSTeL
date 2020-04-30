import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';

const $ = window.$;

class RemittanceReport extends React.Component {
    handelChangeImg(e){
        // this.readURL(e);
    }
    readURL(input) {
        // console.log(input);
        // return;
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          
          reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
          }
          
          reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }
    componentDidMount() {
        let self = this;
        $("#imgInp").change(function() {
            self.readURL(this);
        });

        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);

        elems = document.querySelectorAll('select');
        M.FormSelect.init(elems)

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
                //  {
                //     text: '<i class="fa fa-lg fa-file-text-o"></i>',
                //     extend: 'csv',
                //     className: 'btn btn-xs btn-primary p-5 m-0 width-35 assets-export-btn export-csv ttip',
                //     title: 'export_filename',
                //     extension: '.csv'
                // }, 
                {
                    text: `<a class="white-text">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 26 26" width="26px" height="26px" style="&#10;    height: 19px;&#10;"><path d="M 15 0 L 0 2.875 L 0 23.125 L 15 26 Z M 16 3 L 16 5.96875 L 19.03125 5.96875 L 19.03125 8 L 16 8 L 16 10 L 19 10 L 19 12 L 16 12 L 16 14 L 19 14 L 19 16 L 16 16 L 16 18 L 19 18 L 19 20 L 16 20 L 16 23 L 25.15625 23 C 25.617188 23 26 22.605469 26 22.125 L 26 3.875 C 26 3.394531 25.617188 3 25.15625 3 Z M 20 6 L 24 6 L 24 8 L 20 8 Z M 3.09375 7.9375 L 5.84375 7.9375 L 7.3125 11 C 7.425781 11.238281 7.535156 11.515625 7.625 11.84375 C 7.683594 11.644531 7.8125 11.359375 7.96875 10.96875 L 9.5625 7.9375 L 12.09375 7.9375 L 9.0625 12.96875 L 12.1875 18.09375 L 9.5 18.09375 L 7.75 14.78125 C 7.683594 14.660156 7.601563 14.421875 7.53125 14.09375 L 7.5 14.09375 C 7.46875 14.25 7.402344 14.496094 7.28125 14.8125 L 5.53125 18.09375 L 2.8125 18.09375 L 6.03125 13.03125 Z M 20 10 L 24 10 L 24 12 L 20 12 Z M 20 14 L 24 14 L 24 16 L 20 16 Z M 20 18 L 24 18 L 24 20 L 20 20 Z" style="&#10;    fill: white;&#10;"/></svg>
                    Excel</a>`,
                    extend: 'excel',
                    className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn export-print',
                    filename: 'aws',
                    // title: 'export_filename',
                    extension: '.xls'
                },{
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
           /*  // buttons: [
            //     {
            //         text: '<a class="white-text"><i class="material-icons left">print</i>Print</a>',
            //         extend: 'print',
            //         className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn export-print',
            //         title: '',
            //         exportOptions: {
            //             rows: function ( idx, data, node ) {
            //               var dt = new $.fn.dataTable.Api('#example' );
            //               var selected = dt.rows( { selected: true } ).indexes().toArray();
                         
            //               if( selected.length === 0 || $.inArray(idx, selected) !== -1)
            //                 return true;
                    
      
            //               return false;
            //           }
            //         }
            //     }
            //     // ,{
            //     //     text: '<a class="white-text"><i class="material-icons left">print</i>Excel</a>',
            //     //     extend: '',
            //     //     className: 'btn btn-primary btn-sm m-5 width-140 assets-select-btn export-print',
            //     // }
            // ], */
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
                <Header title="Remittance Report" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <div className="input-field">
                                        <button className="btn waves-effect waves-light modal-trigger" data-target="modal1"  type="submit" name="action">
                                            Add New Remittance
                                        </button>
                                    </div>
                                </div>

                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p></p><br/><br/>
                                    <table id="example" className="display"></table>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* <!-- Modal Structure --> */}
                    <div id="modal1" className="modal modal-fixed-footer remittance-report">
                        <div className="modal-content">
                            <div className="row">
                                <div className="col s12">
                                    <div className="remittance-logo-wrap">
                                        {/* <img src="https://logodix.com/logo/1931935.png" alt="" className="remittance-logo"/> */}
                                        <label htmlFor="imgInp">
                                            <img id="blah" src="public/imgs/default-logo.svg" alt="" className="remittance-logo" />
                                        </label>
                                        <input className="hidden" type='file' id="imgInp" onChange={this.handelChangeImg.bind(this)} />
                                    </div>
                                    
                                </div>
                                
                                <div className="colx s12">
                                    <div className="input-field col s12">
                                        <input id="remittanceID" type="text" className="validate" />
                                        <label htmlFor="remittanceID">Remittance ID</label>
                                    </div>
                                </div>
                                <div className="colx s12">
                                    <div className="input-field col s12">
                                        <input id="logoname" type="text" className="validate" />
                                        <label htmlFor="logoname">Logo Filename</label>
                                    </div>
                                </div>
                                <div className="colx s12">
                                    <div className="input-field col s12">
                                        <input id="remittance-code" type="text" className="validate" />
                                        <label htmlFor="remittance-code">Remittance Code</label>
                                    </div>
                                </div>
                                <div className="colx s12">
                                    <div className="input-field col s12">
                                        <input id="descrip" type="text" className="validate" />
                                        <label htmlFor="descrip">Description</label>
                                    </div>
                                </div>
                                <div className="colx s12">
                                    <div className="m-select-option input-field col s12">
                                        <select>
                                        <option value="" disabled>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                        </select>
                                        <label>Materialize Select</label>
                                    </div>
                                </div>
                                <div className="colx s12">
                                    <div className="input-field col s12">
                                        <input id="terms" type="text" className="validate" />
                                        <label htmlFor="terms">Terms & Conditions</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="col s12">
                                <button className="btn waves-effect waves-light" type="submit" name="action">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
         );
    }
}
 
export default RemittanceReport;