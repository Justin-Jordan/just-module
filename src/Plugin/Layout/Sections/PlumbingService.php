<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_service_section",
 *   label = @Translation("Plumbing service section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_service",
 *   library = "just_mod/plumbing_service",
 * )
 */
class PlumbingService extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration();
    }
}
