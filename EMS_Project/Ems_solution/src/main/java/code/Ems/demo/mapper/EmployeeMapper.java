package code.Ems.demo.mapper;

import code.Ems.demo.dto.EmployeeDto;
import code.Ems.demo.entity.Employee;

public class EmployeeMapper {

    //To map with employee DTO objects
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(employee.getId(), employee.getFirstname(), employee.getLastname(), employee.getEmail());
    }

    //Maps to employee
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(employeeDto.getId(), employeeDto.getFirstname(), employeeDto.getLastname(), employeeDto.getEmail());
    }

}
