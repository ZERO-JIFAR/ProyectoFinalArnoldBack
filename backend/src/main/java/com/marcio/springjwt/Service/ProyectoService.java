/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Service;

import com.marcio.springjwt.Entity.Proyecto;
import com.marcio.springjwt.Interface.IProyectoService;
import com.marcio.springjwt.Repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectoService implements IProyectoService{
    @Autowired
    private ProyectoRepository proyRep;
    @Override
    public List<Proyecto> getProyecto() {
        List<Proyecto> proyectos = proyRep.findAll();
        return proyectos;
    }

    @Override
    public void saveProyecto(Proyecto proy) {
        proyRep.save(proy);
    }

    @Override
    public void deleteProyecto(Long id) {
        proyRep.deleteById(id);
    }

    @Override
    public Proyecto findProyecto(Long id) {
        Proyecto proy = proyRep.findById(id).orElse(null);
        return proy;
    }
    
}
