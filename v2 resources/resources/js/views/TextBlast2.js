import React from 'react';
import Header from '../layout/admin/Header'
import SideBar from '../layout/admin/SideBar';
import DataTable from '../components/DataTable';
const M = window.M;
const $ = window.$;
class TextBlast extends React.Component{
    
    componentDidMount(){
        M.updateTextFields();
        let myTable = $('#example').DataTable({
            columnDefs: [{
                orderable: false,
                className: 'select-checkbox',
                targets: 0,
            }],
            select: {
                style: 'multi', // 'single', 'multi', 'os', 'multi+shift'
                selector: 'td:first-child',
            },
            order: [
                [1, 'asc'],
            ],
        });
    
        $('#MyTableCheckAllButton').click(function() {
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
                    $('#MyTableCheckAllButton i').attr('class', 'far fa-check-square');
                    return;
                }
    
                if (dt.rows({
                        selected: true
                    }).count() === 0) {
                    // Select all items button.
                    $('#MyTableCheckAllButton i').attr('class', 'far fa-square');
                    return;
                }
    
                // Deselect some items button.
                $('#MyTableCheckAllButton i').attr('class', 'far fa-minus-square');
            }
        });

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
                                    <div className="input-field">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">Message Here...</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="col s12 metronic-white-bg m-top-15">
                                    <p>Select Recipients</p>
                                    

                                    <table id="example" className="display" >
    <thead>
        <tr>
            <th>
                <button  id="MyTableCheckAllButton">
                <i className="far fa-square"></i>  
                </button>
            </th>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>$320,800</td>
        </tr>
        <tr>
            <td></td>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>$170,750</td>
        </tr>
        <tr>
            <td></td>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>$86,000</td>
        </tr>
        <tr>
            <td></td>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>$433,060</td>
        </tr>
        <tr>
            <td></td>
            <td>Airi Satou</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>33</td>
            <td>$162,700</td>
        </tr>
        <tr>
            <td></td>
            <td>Brielle Williamson</td>
            <td>Integration Specialist</td>
            <td>New York</td>
            <td>61</td>
            <td>$372,000</td>
        </tr>
        <tr>
            <td></td>
            <td>Herrod Chandler</td>
            <td>Sales Assistant</td>
            <td>San Francisco</td>
            <td>59</td>
            <td>$137,500</td>
        </tr>
        <tr>
            <td></td>
            <td>Rhona Davidson</td>
            <td>Integration Specialist</td>
            <td>Tokyo</td>
            <td>55</td>
            <td>$327,900</td>
        </tr>
        <tr>
            <td></td>
            <td>Colleen Hurst</td>
            <td>Javascript Developer</td>
            <td>San Francisco</td>
            <td>39</td>
            <td>$205,500</td>
        </tr>
        <tr>
            <td></td>
            <td>Sonya Frost</td>
            <td>Software Engineer</td>
            <td>Edinburgh</td>
            <td>23</td>
            <td>$103,600</td>
        </tr>
        <tr>
            <td></td>
            <td>Jena Gaines</td>
            <td>Office Manager</td>
            <td>London</td>
            <td>30</td>
            <td>$90,560</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Salary</th>
        </tr>
    </tfoot>
</table>



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