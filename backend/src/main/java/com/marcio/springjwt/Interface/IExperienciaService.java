/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Interface;

import com.marcio.springjwt.Entity.Experiencia;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface IExperienciaService {
    public List<Experiencia> getExperiencias();
    public void saveExperiencia(Experiencia ex);
    public void deleteExperiencia(Long id);
    public Experiencia findExperiencia(Long id);
}
