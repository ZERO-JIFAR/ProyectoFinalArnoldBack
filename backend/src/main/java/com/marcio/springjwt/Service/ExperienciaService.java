/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Service;

import com.marcio.springjwt.Entity.Experiencia;
import com.marcio.springjwt.Interface.IExperienciaService;
import com.marcio.springjwt.Repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaService implements IExperienciaService {
    @Autowired
    private ExperienciaRepository expRepo;
    @Override
    public List<Experiencia> getExperiencias() {
      List<Experiencia> listaExp = expRepo.findAll();
      return listaExp;
    }

    @Override
    public void saveExperiencia(Experiencia ex) {
        expRepo.save(ex);
    }

    @Override
    public void deleteExperiencia(Long id) {
      expRepo.deleteById(id);
    }

    @Override
    public Experiencia findExperiencia(Long id) {
      Experiencia exp= expRepo.findById(id).orElse(null);
      return exp;
    }
    
}
