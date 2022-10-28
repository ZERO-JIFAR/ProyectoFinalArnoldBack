/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Interface;


import com.marcio.springjwt.Entity.Skill;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface ISkillService {
    
     public List<Skill> getSkills();
    public void saveSkill(Skill skill);
    public void deleteSkill(Long id);
    public Skill findSkill(Long id);
}
