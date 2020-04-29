import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';
import DataTable from '../components/DataTable';
const M = window.M;
const $ = window.$;
class TextBlast extends React.Component{
    
    componentDidMount(){
        M.updateTextFields();

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
                <button id="MyTableCheckAllButton">
                <i class="far fa-square"></i>
                </button>
                `,
                className: 'select-checkbox',
                id: 'asdf',
              orderable: false,
              defaultContent:''
            //   defaultContent: `
            //   <label>
            //     <input type="checkbox" />
            //     <span><span>
            //   </label>`
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


        let myTable = $('#example').DataTable({
            // columnDefs: [{
            //     orderable: false,
            //     className: 'select-checkbox',
            //     targets: 0,
            // }],
            data: dataSet,
            columns: columnDefs,
            select: {
                style: 'multi', // 'single', 'multi', 'os', 'multi+shift'
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
            "dom": '<"top"f>rt<"row bottom"<"col s6"i><"col s6 right-align"p>><"clear">',
            "scrollX": true,
            order: [
                [1, 'asc'],
            ],
        });
    
        $('th.select-checkbox').click(function() {
            if (myTable.rows({
                    selected: true
                }).count() > 0) {
                myTable.rows().deselect();
                return;
            }
    
            myTable.rows().select();
        });
    
        myTable.on('select deselect', function(e, dt, type, indexes) {
            if (type === 'row') {
                // We may use dt instead of myTable to have the freshest data.
                if (dt.rows().count() === dt.rows({
                        selected: true
                    }).count()) {
                    // Deselect all items button.
                    // $('#MyTableCheckAllButton i').attr('class', 'far fa-check-square');
                    $('#MyTableCheckAllButton').parent().attr('id', 'selected');
                    return;
                }
    
                if (dt.rows({
                        selected: true
                    }).count() === 0) {
                    // Select all items button.
                    // $('#MyTableCheckAllButton i').attr('class', 'far fa-square');
                    $('#MyTableCheckAllButton').parent().attr('id', 'square');
                    return;
                }
    
                // Deselect some items button.
                // $('#MyTableCheckAllButton i').attr('class', 'far fa-minus-square');
                $('#MyTableCheckAllButton').parent().attr('id', 'square-minus');
            }
        });

        
        // myTable.on( 'click', 'tr', function () {
            
        //     // $(this).toggleClass('selected');
        //     // $(this).find(".select-checkbox").click();
        //     // if($(this).hasClass("selected")){
        //     //     // $(this).find("input").prop("checked", true);
        //     // }else{
        //     //     $('.selectAll').attr('id', 'indeterminate');
        //     //     $(this).find("input").prop("checked", false);
        //     // }
            
            
        // } );


        // SUBMIT
        $('.btn-textblast').click( function () {
            alert( myTable.rows('.selected').data().length +' row(s) selected' );
            console.log(myTable.rows('.selected').data());
        } );


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
                                    <div className="input-field col m12 s12">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">Message Here...</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Select Recipients</p>
                                    

                                    <table id="example" className="display" ></table>
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