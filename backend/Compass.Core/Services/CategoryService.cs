using AutoMapper;
using Compass.Core.Entities;
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
        private readonly IMapper _mapper;
        public CategoryService(IRepository<Category> categoryRepo, IMapper mapper)
        {
            _categoryRepo = categoryRepo;
            _mapper = mapper;
        }
        public async Task<List<Category>> GetAll()
        {
            var result = await _categoryRepo.GetAll();
            return _mapper.Map<List<Category>>(result);
        }
    }
}
