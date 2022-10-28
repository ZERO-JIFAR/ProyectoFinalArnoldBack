/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Service;


import com.marcio.springjwt.Entity.Educacion;
import com.marcio.springjwt.Interface.IEducacionService;
import com.marcio.springjwt.Repository.EducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducacionService implements IEducacionService{
    
    @Autowired
    private EducacionRepository edRepo;
    @Override
    public List<Educacion> getEducacion() {
         List<Educacion> ed = edRepo.findAll();
         return ed;
    }

    @Override
    public void saveEducacion(Educacion ed) {
        edRepo.save(ed);
    }

    @Override
    public void deleteEducacion(Long id) {
        edRepo.deleteById(id);
    }

    @Override
    public Educacion findEducacion(Long id) {
       Educacion ed = edRepo.findById(id).orElse(null);
       return ed;
    }
    
}
