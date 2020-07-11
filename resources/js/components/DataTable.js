import React from 'react';
const $ =  window.$;
class DataTable extends React.Component{
  
    constructor(props){
      super(props);
      this.el = React.createRef();
      this.$el = '';
      this._isMounted = false;    
    }
    resetTable(data = [])
    {
        this.$el.clear();
        this.$el.rows.add(data);
        this.$el.draw();
    }
    componentDidUpdate(){
      // this.resetTable(this.props.DataSet);
    }
    componentWillUnmount(){
      this._isMounted =false;
    }
    componentDidMount(){
      this._isMounted = true;
      // console.log(this.props);
        this.$el = $(this.el.current);
        // var dataSet = [
        //     {name: 'JOhn DOe', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe1', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe2', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe3', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe4', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe5', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe6', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe7', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe8', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe9', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe10', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe11', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe12', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //     {name: 'JOhn DOe13', position: 'IT', salary: '1000', aw: 'JOhn sdfsfsf', aws: 'ITsdfsfsfsfooofjfsf', awss: '1000'},
        //   ];
        
          var columnDefs = [{
            title: "ACCNT #", data: 'userid'
            }, {
              title: "TRANS #", data: 'transactionno'
            },{
              title: "CATEGORY", data: 'gameid'
            },
            {
              title: "COMBINATION", data: 'combination'
            },
            {
              title: "STRAIGHT", data: 'straight'
            },
            {
              title: "RUMBLE", data: 'rumble'
            },
            {
              title: "DATE", data: 'datetrn'
            },
            {
              title: "SMS", data: 'sms_sent'
            },
            {
              title: "EMAIL", data: 'email_sent'
            }
        ];

        
        if(this._isMounted){
          
            this.$el = this.$el.DataTable({
                // "sPaginationType": "simple_numbers",
                // "bInfo": false,
                // "pageLength": 5,
                "pagingType": "simple",
                "searching": false,
                // "ordering": false,

                data: this.props.DataSet,
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
                "dom": '<"top"f>rt<"col s12"<"col s6"i><"col s6 right-align"p>><"clear">',
                // "scrollX": true,
                "order": [[ 6, "desc" ]],
                
              });
        }
        
    }
    render(){
        return(
            <div>
                <div className="datatable-containerx">
                    <table id="example" className="centered responsive-table" ref={this.el}></table>
                </div>
            </div>
        );
    }
    
}

export default DataTable;