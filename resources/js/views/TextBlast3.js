import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';
import DataTable from '../components/DataTable';
const M = window.M;
const $ = window.$;
class TextBlast extends React.Component{
    
    componentDidUpdate(prevProps, prevState){
        
    }
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
              title: `
                <button  class="selectAll">
                <i className="far fa-square"></i>  
                </button>
                `,
                className: 'select-checkbox',
              orderable: false,
              defaultContent: `
              <label>
                <input type="checkbox" />
                <span><span>
              </label>`
          },{
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
        
        let table = $('#example').DataTable({
            // "sPaginationType": "simple_numbers",
            // "bInfo": false,
            // "pageLength": 5,
            select: {
                style: 'multi', // 'single', 'multi', 'os', 'multi+shift'
                selector: 'td:first-child',
            },
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
            "order": [[ 1, "desc" ]]
            
          });

        // $('.selectAll').click(function() {
        //     if (table.rows({
        //             selected: true
        //         }).count() > 0) {
        //         table.rows().deselect();
        //         $('td').find("input").prop("checked", false);
        //         return;
        //     }
        //     table.rows().select();
        //     $('td').find("input").prop("checked", true);
        // });


        table.on('select deselect', function(e, dt, type, indexes) {
            if (type === 'row') {
                // We may use dt instead of myTable to have the freshest data.
                if (dt.rows().count() === dt.rows({
                        selected: true
                    }).count()) {
                    // Deselect all items button.
                    $('.selectAll i').attr('class', 'far fa-check-square');
                    return;
                }
    
                if (dt.rows({
                        selected: true
                    }).count() === 0) {
                    // Select all items button.
                    $('.selectAll i').attr('class', 'far fa-square');
                    return;
                }
    
                // Deselect some items button.
                $('.selectAll').attr('id','indeterminate-checkbox');
            }
        });

        // table.on( 'click', 'tr', function () {
        //     $(this).toggleClass('selected');

        //     if($(this).hasClass("selected")){
        //         $(this).find("input").prop("checked", true);
        //     }else{
        //         $('.selectAll').attr('id', 'indeterminate');
        //         $(this).find("input").prop("checked", false);
        //     }
            
            
        // } );

        M.updateTextFields();
    }
    render(){
        return(
            <div className="App">
                <Header title="Text Blast" />
                <article>
                    <SideBar/>
                    <main>
                        <div className="row padding-all-15 padding-top-0">
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Message Template</p>
                                    <div className="input-field">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">Message Here...</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Select Recipients</p>
                                    <label>
        <input id="indeterminate-checkbox" type="checkbox" />
        <span>Indeterminate Style</span>
      </label>

                                    <div>
                                        <div className="datatable-container">
                                            <table id="example" className="highlight dataTable"></table>
                                        </div>
                                    </div>


                                    <p className="right-align">
                                        <button className="btn waves-effect waves-light btn-textblast" type="submit" name="action">Send
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}
export default TextBlast;