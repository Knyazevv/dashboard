using Ardalis.Specification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compass.Core.Entities.Specification
{
    public static class Courses
    {
        public class GetAll : Specification<Course>
        {
            public GetAll()
            {
                Query.Include(x => x.Category);
            }
        }
    }
}
