﻿using AutoMapper;
using Compass.Core.DTO_s;
using Compass.Core.Entities;
using Compass.Core.Entities.Specification;
using Compass.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compass.Core.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IRepository<Category> _categoryRepo;
        private readonly IRepository<Course> _courseRepo;
        private readonly IMapper _mapper;
        public CategoryService(IRepository<Category> categoryRepo, IMapper mapper)
        {
            _categoryRepo = categoryRepo;
            _mapper = mapper;
        }
        public async Task<List<CourseDto>> GetAll()
        {
            var result = await _courseRepo.GetListBySpec(new Courses.GetAll());
            return _mapper.Map<List<CourseDto>>(result);
        }
    }
}
