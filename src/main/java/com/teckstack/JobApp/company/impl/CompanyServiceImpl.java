package com.teckstack.JobApp.company.impl;

import com.teckstack.JobApp.company.Company;
import com.teckstack.JobApp.company.CompanyRepo;
import com.teckstack.JobApp.company.CompanyService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {

    private CompanyRepo companyRepo;

    public CompanyServiceImpl(CompanyRepo companyRepo) {
        this.companyRepo = companyRepo;
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepo.findAll();
    }

    @Override
    public boolean updateCompany(Company company, Long id) {
        Optional<Company> companyOptional = companyRepo.findById(id);
        if (companyOptional.isPresent()){
            Company companyUpdate = companyOptional.get();
            companyUpdate.setName(company.getName());
            companyUpdate.setJobs(company.getJobs());
            companyUpdate.setDescription(company.getDescription());
            companyRepo.save(companyUpdate);
            return true;
        }else {
            return false;
        }

    }

    @Override
    public void createCompany(Company company) {
        companyRepo.save(company);
    }

    @Override
    public boolean deleteCompany(Long id) {
        if (companyRepo.existsById(id)){
        companyRepo.deleteById(id);
        return true;
    }else {
        return false;
        }
    }

    @Override
    public Company getCompanyById(Long id) {
        return companyRepo.findById(id).orElse(null);
    }


}
