/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Interface;

import com.marcio.springjwt.Entity.Banner;

/**
 *
 * @author Usuario
 */
public interface IBannerService {
      public Banner getBanner(Long id);
    public void saveBanner(Banner banner);
    public Banner findBanner(Long id);
}
