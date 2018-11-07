package main 
/* Imports
 * 3 utility libraries for formatting, handling bytes, reading and writing JSON, and string manipulation
 * 2 specific Hyperledger Fabric specific libraries for Smart Contracts
 */ 
 import (
	"fmt"
	"encoding/json"
	"math/rand"
	"bytes"
    "github.com/hyperledger/fabric/core/chaincode/shim"
     pb "github.com/hyperledger/fabric/protos/peer"
    ) 

// Define the Smart Contract structure 
type SimpleChaincode struct {
}
// ===================================================================================
// Main
// ===================================================================================
func main() {
	err := shim.Start(new(SimpleChaincode))
	if err != nil {
		fmt.Printf("Error starting Simple chaincode: %s", err)
	}
}

// Init initializes chaincode
// ===========================
func (t *SimpleChaincode) Init(stub shim.ChaincodeStubInterface) pb.Response {
	return shim.Success(nil)
}

// Invoke - Our entry point for Invocations
// ========================================
func (t *SimpleChaincode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	function,args := stub.GetFunctionAndParameters()
	fmt.Println("invoke is running " + function)

	// Handle different functions
	if function == "initLedger" { //read the data from the json file
		return t.initLedger(stub,args)
	}else if function == "query"{
		return t.query(stub,args)
	}
	
	fmt.Println("invoke did not find func: " + function) //error
	return shim.Error("Received unknown function invocation")
}

//initLedger - populate the database with the data
func (t *SimpleChaincode) initLedger(stub shim.ChaincodeStubInterface, args[]string) pb.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	i := rand.Int()
	id := fmt.Sprintf("%s%d","PAT",i)
	var data interface{}
	err := json.Unmarshal([]byte(args[0]), &data)
	if err != nil {
   		return shim.Error(err.Error())
	} 
	dataInBytes, err := json.Marshal(data)
	if err != nil {
		return shim.Error(err.Error())
	 }
	insertErr := stub.PutState(id, dataInBytes)
	if insertErr!= nil {
		return shim.Error(insertErr.Error())
	}
	return shim.Success(nil)
}

//to fetch the data from database by hash
func (t *SimpleChaincode) query(stub shim.ChaincodeStubInterface, args[]string) pb.Response {
	
	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}	
	
	queryString := fmt.Sprintf("{\"selector\":{\"_rev\":\"%s\"}}", args[0])
	resultsIterator, err := getQueryResultForQueryString(stub, queryString)
	if err != nil {
		return shim.Error(err.Error())
	}
	return shim.Success(resultsIterator)
}
//responsible for contacting the database and return the data
func getQueryResultForQueryString(stub shim.ChaincodeStubInterface, queryString string) ([]byte, error) {

	fmt.Printf("- getQueryResultForQueryString queryString:\n%s\n", queryString)
	resultsIterator, err := stub.GetQueryResult(queryString)
	if err != nil {
		return nil, err
	}
	defer resultsIterator.Close()

	// buffer is a JSON array containing QueryRecords
	var buffer bytes.Buffer
	buffer.WriteString("[")

	bArrayMemberAlreadyWritten := false
	for resultsIterator.HasNext() {
		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return nil, err
		}
		// Add a comma before array members, suppress it for the first array member
		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")
		}		
		buffer.WriteString("{\"Key\":")
		buffer.WriteString("\"")
		buffer.WriteString(queryResponse.Key)
		buffer.WriteString("\"")

		buffer.WriteString(", \"Record\":")
		// Record is a JSON object, so we write as-is
		buffer.WriteString(string(queryResponse.Value))
		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true
	}
	buffer.WriteString("]")

	fmt.Printf("- getQueryResultForQueryString queryResult:\n%s\n", resultsIterator)

	return buffer.Bytes(), nil
}
