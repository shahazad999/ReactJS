import React, { Component } from 'react';
import logo from './logo.svg';
import Input from 'terra-form-input';
import Button from 'terra-button/lib/Button';
import Fieldset from 'terra-form-fieldset/lib/Fieldset';
import ApplicationMenuName from 'terra-application-name/lib/ApplicationMenuName';
import Image from 'terra-image';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import Checkbox from 'terra-form-checkbox';
import img from './cerner.png';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

class DocumentInput extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        'fireUrl': '' , 'documents': [] , 'ijson': [],
        'items': {"resourceType":"Bundle","id":"7429ac77-d3ab-481c-ba57-e0440e58c567","type":"searchset","total":4,"link":[{"relation":"self","url":"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Procedure?patient=1316020"}],"entry":[{"fullUrl":"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Procedure/26394555","resource":{"resourceType":"Procedure","id":"26394555","meta":{"versionId":"0","lastUpdated":"2015-05-14T18:12:29.000Z"},"text":{"status":"generated","div":"\u003Cdiv\u003E\u003Cp\u003E\u003Cb\u003EProcedure\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ESubject\u003C/b\u003E: Houde, Test 1\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Influenza (split virion) vaccine injection suspension 0.5mL prefilled syringe\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Completed\u003C/p\u003E\u003C/div\u003E"},"subject":{"reference":"Patient/1316020","display":"Houde, Test 1"},"status":"completed","code":{"coding":[{"system":"http://snomed.info/sct","code":"348046004","display":"Influenza (split virion) vaccine injection suspension 0.5mL prefilled syringe (product)"}],"text":"Influenza (split virion) vaccine injection suspension 0.5mL prefilled syringe"},"performedDateTime":"2015","encounter":{"reference":"Encounter/2457909"}}},{"fullUrl":"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Procedure/26394551","resource":{"resourceType":"Procedure","id":"26394551","meta":{"versionId":"0","lastUpdated":"2015-05-14T18:11:37.000Z"},"text":{"status":"generated","div":"\u003Cdiv\u003E\u003Cp\u003E\u003Cb\u003EProcedure\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ESubject\u003C/b\u003E: Houde, Test 1\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Influenza A (H1N1) virus\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Completed\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ELocation\u003C/b\u003E: BU-BC\u003C/p\u003E\u003C/div\u003E"},"subject":{"reference":"Patient/1316020","display":"Houde, Test 1"},"status":"completed","code":{"coding":[{"system":"http://snomed.info/sct","code":"442352004","display":"Influenza A virus subtype H1N1 (organism)"}],"text":"Influenza A (H1N1) virus"},"performedDateTime":"2007","encounter":{"reference":"Encounter/2457909"},"location":{"reference":"Location/4059955","display":"BU-BC"}}},{"fullUrl":"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Procedure/34722551","resource":{"resourceType":"Procedure","id":"34722551","meta":{"versionId":"0","lastUpdated":"2015-10-27T15:36:56.000Z"},"text":{"status":"generated","div":"\u003Cdiv\u003E\u003Cp\u003E\u003Cb\u003EProcedure\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ESubject\u003C/b\u003E: Houde, Test 1\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Knee abrasion\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Completed\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ELocation\u003C/b\u003E: Baseline East\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ENotes\u003C/b\u003E: \u003Cul\u003E\u003Cli\u003ERecreate Test.\u003C/li\u003E\u003C/ul\u003E\u003C/p\u003E\u003C/div\u003E"},"subject":{"reference":"Patient/1316020","display":"Houde, Test 1"},"status":"completed","code":{"coding":[{"system":"http://snomed.info/sct","code":"211332006","display":"Abrasion, knee (disorder)"}],"text":"Knee abrasion"},"performer":[{"actor":{"reference":"Practitioner/1686008","display":"Morthala, Uday"}}],"_performedDateTime":{"extension":[{"url":"http://hl7.org/fhir/StructureDefinition/data-absent-reason","valueCode":"unknown"}]},"encounter":{"reference":"Encounter/2457909"},"location":{"reference":"Location/4048128","display":"Baseline East"},"notes":[{"authorReference":{"reference":"Practitioner/1686008","display":"Morthala, Uday"},"time":"2015-10-27T15:36:57.000Z","text":"Recreate Test."}]}},{"fullUrl":"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Procedure/24110557","resource":{"resourceType":"Procedure","id":"24110557","meta":{"versionId":"1","lastUpdated":"2014-09-16T22:49:27.000Z"},"text":{"status":"generated","div":"\u003Cdiv\u003E\u003Cp\u003E\u003Cb\u003EProcedure\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ESubject\u003C/b\u003E: Houde, Test 1\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Influenza\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Completed\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ENotes\u003C/b\u003E: \u003Cul\u003E\u003Cli\u003ETesting this influenza\u003C/li\u003E\u003C/ul\u003E\u003C/p\u003E\u003C/div\u003E"},"subject":{"reference":"Patient/1316020","display":"Houde, Test 1"},"status":"completed","code":{"coding":[{"system":"http://snomed.info/sct","code":"348046004","display":"Influenza (split virion) vaccine injection suspension 0.5mL prefilled syringe (product)"}],"text":"Influenza"},"performedDateTime":"2014-09-16T00:00:00.000-05:00","encounter":{"reference":"Encounter/2457909"},"notes":[{"authorReference":{"reference":"Practitioner/1590015","display":"Herrman, Greg"},"time":"2014-09-16T21:35:32.000Z","text":"Testing this influenza"}]}}]},
        'hash': 'http://localhost:5984/mychannel_bas2/PAT2610529275472644968', 
        'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM2MDE1NDE3NTU1MjIsInVzZXJuYW1lIjoiQ2VybmVyIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDE3NTU1MjJ9.rsF6_ZaM9le-GLJziHzNkqwTGfb52Rrxbc8rB1ruSI0', 
        'filters': [], Holder: 'URL', input: '', selectedAnswers:[], rev:[]
    }
    this.add =this.add.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.addinput=this.addinput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  
  }
 
  componentDidUpdate() {
    var url = this.state.fireUrl;
    var len = url.length;
    if (len > 10) {
      this.fetchData()
    } 
 
   
  }
  componentDidUpdate() {
    var url2 = this.state.hash;
    var len2 = url2.length;
    if (len2 > 6) {
      this.fetchHash()
    }
  }
  fetchHash() {
    let config = {
      method: 'GET',
  
    }
   
    fetch(this.state.hash, config)
    .then(response =>  response.text()  )
    .then((response) => this.setState({ 'rev' : response , hash: '', }));
  }
  fetchData() {
    let config = {
      method: 'GET',
      headers: {
        'Accept': 'application/json+fhir'
      },
    }
    fetch(this.state.fireUrl, config)
      .then(response =>  response.json()  )
      .then((response) => this.setState({ 'items' : response , fireUrl: '', Holder: this.state.fireUrl}));
  
  }
  submit() {
 
    var j = JSON.stringify(this.state.items)
    var k = JSON.stringify(j)
    var cinput = JSON.parse(JSON.stringify(this.state.selectedAnswers))
    this.setState({input: j});
  
    let config = {
      method: 'POST',
      headers: {
        'authorization': 'Bearer '+this.state.auth,
        'content-Type': 'application/json'
        
      },
      body: '{ "peers": ["peer0.org1.example.com","peer0.org2.example.com"], "fcn":"initLedger", "args":['+cinput+']}'
    }
   

    fetch('http://localhost:4000' + '/channels/mychannel/chaincodes/bas2', config)
      .then(response =>  response.text() )
      .then((response) => this.setState({ 'hash' : response }));
    
  }

  handleSubmit() {
    this.submit();
   
  }
  handleSubmit2() {
    this.fetchHash();
   
  }

  add() {
    
    const documents =this.state.documents.concat(DocumentInput);
    this.setState({documents});
  }
  
 /* add(e) {
    const {documents} =this.state;
    documents.push(e);
    this.setState({documents});
  }*/
  handleChange(e, index) {
    var filters = this.state.filters.slice();
    filters[index]= e.target.value;
    this.setState({filters: filters})
  }

  handleOnChange(e) {
    const { selectedAnswers } = this.state;

    if (e.currentTarget.checked) {
      selectedAnswers.push(e.currentTarget.value);
    } else {
      selectedAnswers.splice(selectedAnswers.indexOf(e.currentTarget.value), 1);
    }

    this.setState({ selectedAnswers });
  }

  addinput(e) {
    this.setState({feilds :[...this.state.feilds, e.target.value]})
  }
  render() {
    const inputStyle ={ height: '35px', width: '400px', margin: '5px',};
    const documento =this.state.documents.map((Element, index) => {
      return (<div><Element key={index} index ={index} /> <Input placeholder = "Filter" style={inputStyle}  onChange ={(e) => this.handleChange(e, index+1)}  />
      </div>);
    })

    const buttonStyle = { margin: 'auto', float: 'right' };
    var documents = JSON.stringify(this.state.documents)
    var filters = JSON.stringify(this.state.filters) 
    var query = JSON.stringify(this.state.items)
    var dub = JSON.stringify(query)
    var parse = JSON.parse(query)
    var x = [Object.keys(this.state.items)]
    var cinput = JSON.parse(JSON.stringify(this.state.selectedAnswers))
    var rev = this.state.rev;
    /**
     *  var obj = this.state.items
    var filt = [];
    var filterFeild = "";
    var filterVal = this.state.filters;
    for (var i = 0; i< obj.list.length; i++) {
      if (obj.list[i][filterFeild] == filterVal ) {
        filt.push(obj.list[i])
      }
    }
     */
    var tifs = this.state.items;
 
   
/**
 * 
    const total = Object.entries(tifs).map(item =>  <React.Fragment key={item}>


    
    <Checkbox id="ux-dept" name="dept[]" labelText={item[0]} onChange={this.handleOnChange} value={JSON.stringify(item)} />
     
    

    </React.Fragment>)
     const total = Object.entries(tifs).map(item =>  
    <React.Fragment key={item}>
    <Checkbox id="ux-dept" name="dept[]" labelText={item[0]} onChange={this.handleOnChange} value={JSON.stringify(item)} />
    </React.Fragment>)
    
 */
const total = Object.entries(tifs).map(item => 

  <React.Fragment key={item}>
  <div style={{ width:'500px', margin:'auto', fontSize: '20px'}}>
  <Checkbox id="Data" name="filter" labelText={item[0]} onChange={this.handleOnChange} value={JSON.stringify(JSON.stringify({item: item}))} />
  </div>
  </React.Fragment>
 )
    



    return (
      <div style={{margin: '30px'}}>
        
        <div  style={{ margin: 'auto', width: '500px', textAlign:'left', position:'relative'}}> 
          <div  style={{ margin: 'auto', height: '500px', width: '100%'}}> 
                
            <Fieldset legend="Blockchain-as-a-Service" legendAttrs={{ className: 'healtheintent-application' }} help="Enter URL" isInline >
              <ul>
              <Input type="text" placeholder ={this.state.Holder} value={this.state.fireUrl} onChange={(e) => {this.setState({fireUrl: e.target.value})}}  style={inputStyle}/>                      
              </ul>

          
              
              <ul>
           
              
              </ul>
              </Fieldset>
       
              
        
              <Fieldset legend="Retrived Data"  help="Select the data to be Added to Block-Chain" isInline >
              <CheckboxField
       
       isInvalid={this.state.selectedAnswers.length <= 0}
        error="You must select atleast one"
     
      >
       {total}
      </CheckboxField>
             
              <div style={{ margin: 'auto', textAlign:'center'}}>
              <Button color="success" size="lg" onClick={this.handleSubmit} text="Submit" variant="action"  />
              <Button color="success" size="lg" onClick={this.handleSubmit2} text="hash" variant="action"  />
              </div>
              </Fieldset>
              <a href ={this.state.hash}>
                
                Hash : {this.state.hash}
              </a>
             <ul>
               {this.state.rev}
             </ul>
          </div> 
        </div>              
      </div>
    );
  }
}

export default App;
/**
 *              <output>{this.state.items.map(item => (
          <React.Fragment key={item.id}>
  
            <h2>{item.resourceType}</h2>

            
        
            
          </React.Fragment>
        ))}</output>


         const tifOptionsES6 = Object.keys(tifs).map(item =>  <React.Fragment key={item}>

    
      <Checkbox id="ux-dept" name="dept[]" labelText={item} onChange={this.handleOnChange} value={item[0]+':'+item[1]} />
     
    
    
    </React.Fragment>)
 */
/**
 * Filter Input with + button
 *               <ul>
              {documento}
              </ul>
              <ul>
              <Input type="text" placeholder = "Filter"  onChange ={(e) => this.handleChange(e ,0)} style={inputStyle} />
           
              <Button  onClick={this.add} icon={<IconAdd/>} variant="de-emphasis" style={buttonStyle} isInline/> 
              
         
         
              </ul>
 */